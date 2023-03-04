const Message = require("../models/messageModel");
const express = require("express");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");
const User = require("../models/userModel");

const chatResponse = (data, statusCode, res) => {
  res.send(statusCode).json({
    status: "success",
    data: data,
  });
};

exports.createChat = (io, socket) => {
  socket.on("sendMessage", async (data) => {
    let existingMessage = await getExistingMessagesForTheDay(data, io);
    addMessage(existingMessage, data, io);
  });

  socket.on("getOrderMessages", async (members) => {
    getOrderMessages(members, io);
  });
};

const getExistingMessagesForTheDay = async (receivedMessage, io) => {
  let query;
  if (receivedMessage != "") {
    query = {
      members: receivedMessage.members,
    };
  } else {
    query = {};
  }
  try {
    return await Message.find(query);
  } catch (error) {
    return error;
  }
};

const addMessage = async (existingMessage, data, io) => {
  const emitMessage = (io, message) => {
    io.emit("receivedMessage", message);
  };

  //CHECK IF MESSAGE EXIST FOR THE DAY AND ADD TO EXISTING MESSAGE
  if (existingMessage.length != 0) {
    existingMessage[0].messages[
      existingMessage[0].messages.length - 1
    ].dailyMessages.push(data.messages);

    try {
      await Message.findByIdAndUpdate(existingMessage[0]._id, {
        $set: {
          messages: existingMessage[0].messages,
        },
      });
      emitMessage(io, data);
    } catch (err) {
      console.log(err);
    }
  }
  //------- ELSE CREATE A NEW MESSAGE FOR THE DAY----------------
  else {
    const message = await Message.create({
      members: data.members,
      messages: [
        {
          date: data.date,
          dailyMessages: [
            {
              username: data.messages.username,
              time: data.messages.time,
              message: data.messages.message,
            },
          ],
        },
      ],
    });
    // const message = await Message.create({
    //   date: data.date,
    //   members: data.members,
    //   messages: [
    //     {
    //       username: data.messages.username,
    //       time: data.messages.time,
    //       message: data.messages.message,
    //     },
    //   ],
    // });
    emitMessage(io, message);
  }
};

const getOrderMessages = async (data, io) => {
  const members = data.members;
  const staffPosition = members[1];

  let username;

  const staff = await User.find({ staffType: staffPosition });

  if (staff.length == 0) {
    username = "";
  } else {
    username = staff[0].username;
  }

  let query = {
    members: members,
  };

  await Message.findOneAndUpdate(query, { unRead: 0 });

  try {
    const messages = await Message.find(query);
    const result = {
      messages: messages[0],
      username: username,
      switchingUser: data.user,
    };
    io.emit("roomMessages", result);
  } catch (error) {
    console.log(error);
  }
};

exports.getRooms = (io, socket) => {
  socket.on("getRooms", async (staffType) => {
    const rooms = await Message.find({
      dailyMessages: { $size: { $gt: 0 } },
      unRead: { $gt: 1 },
      members: { $in: staffType },
    });
    console.log(rooms);
    io.emit("unreadRooms", rooms);
  });
};

exports.getOffices = (io, socket) => {
  socket.on("getOffices", async (activeRoom) => {
    const rooms = await Message.find({
      dailyMessages: { $size: { $gt: 0 } },
      members: { $in: activeRoom },
    });

    io.emit("unreadOffices", rooms);
  });
};

exports.endChat = (io, socket) => {
  socket.on("endChat", async (id) => {
    const message = await Message.findById(id);
    await Message.findByIdAndDelete(id);

    io.emit("chatEnded", message);
  });
};
