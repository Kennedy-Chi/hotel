const { token } = require("morgan");
const Sales = require("../models/salesModel");
const Item = require("../models/itemModel");
const Order = require("../models/orderModel");
const Message = require("../models/messageModel");
const User = require("../models/userModel");
const AppError = require("../utils/appError");
const APIFeatures = require("../utils/apiFeatures");
const catchAsync = require("../utils/catchAsync");
const pluralize = require("pluralize");

const formatAMPM = (date) => {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  var strTime = hours + ":" + minutes + " " + ampm;
  return strTime;
};

const sendAutoMessage = async (
  salesPoint,
  activeRoom,
  body,
  salesPerson,
  io
) => {
  const autoMessage = `Thank you Sir/Ma for your order, this is ${salesPerson.username} from the ${salesPerson.staffType}, 
  kindly know that your order is being prepared and will get to your room as soon as possible`;

  let data = {
    members: [activeRoom, salesPerson.staffType],
    date: body.day,
    messages: {
      username: salesPerson.username,
      time: formatAMPM(new Date(body.time)),
      message: autoMessage,
    },
  };

  const emitMessage = (io, message) => {
    io.emit("receivedAutoMessage", message);
  };

  const query = {
    members: [activeRoom, salesPerson.staffType],
  };

  const existingMessage = await Message.find(query);

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
      members: [activeRoom, salesPoint],
      unRead: 0,
      messages: [
        {
          date: body.day,
          dailyMessages: [
            {
              username: salesPerson.username,
              time: formatAMPM(new Date(body.time)),
              message: autoMessage,
            },
          ],
        },
      ],
    });

    emitMessage(io, message);
  }
};

exports.createOrder = (io, socket) => {
  socket.on("createOrder", async (body) => {
    const saveSales = async (description, el) => {
      let price = 0;
      for (let i = 0; i < body.salesPoint.length; i++) {
        if (el == body.salesPoint[i]) {
          description.push(body.description[i]);
          price += body.eachPrice[i] * body.eachQuantity[i];
        }
      }

      const salesField = {
        description: description,
        price: price,
        day: body.day,
        customer: body.customer,
        customerId: body.customerId,
        time: body.time,
        userStatus: body.status,
        salesPoint: el,
        formatedDate: body.formatedDate,
      };

      const sales = await Sales.create(salesField);
      salesField.salesId = sales._id;
      await Order.create(salesField);
    };

    const salesPointSet = new Set(body.salesPoint);

    salesPointSet.forEach((el) => {
      let description = [];
      saveSales(description, el);
    });

    io.emit("createdOrder", body.customerId);

    //GET THE CUSTOMER ACTIVE ROOM
    const user = await User.findById(body.customerId);

    //GET THE CURRENT OFFICES FOR THE ORDER
    body.salesPoint.forEach(async (el) => {
      const salesPerson = await User.find({ staffType: el });
      if (salesPerson.length != 0) {
        sendAutoMessage(el, user.activeRoom, body, salesPerson[0], io);
      }
    });
  });

  socket.on("createStore", async (body) => {
    //GET THE CUSTOMER ACTIVE ROOM
    const user = await User.findById(body.customerId);

    body.description.forEach(async (el) => {
      let salesField = {
        description: isNaN(el.price)
          ? `${el.quantity} ${pluralize(el.storeOutputUnit, el.quantity)} of ${[
              el.name,
            ]}`
          : `${el.quantity} ${pluralize(el.storeInputUnit, el.quantity)} of ${[
              el.name,
            ]}`,
        price: isNaN(el.price) ? 0 : el.price * el.quantity,
        day: body.day,
        customer: user.fullName,
        customerId: body.customerId,
        time: body.time,
        salesPoint: body.salesPoint,
        formatedDate: body.formatedDate,
      };

      let input = el.remaining[0];
      let output = el.remaining[1];

      if (isNaN(el.buyingPrice)) {
        let totalInput = input * el.storeOutputPerInput + output;

        if (totalInput < el.quantity) {
          io.emit(
            "createdStore",
            "You have requested more than what is available in the store"
          );
          return;
        } else {
          const balanceInput = totalInput - el.quantity;
          input = Math.floor(balanceInput / el.storeOutputPerInput);
          output = balanceInput % el.storeOutputPerInput;
        }
      } else {
        input = input + el.quantity;
      }

      if (el.sign == "minus") {
        let position = null;
        if (el.available == []) {
          el.available.push({
            salesPoint: body.salesPoint,
            number: el.quantity,
          });
        } else {
          for (let index = 0; index < el.available.length; index++) {
            if (el.available[index].salesPoint == body.salesPoint) {
              position = index;
              break;
            }
          }

          if (position != null) {
            el.available[position].number =
              el.quantity + el.available[position].number;
          } else {
            el.available.push({
              salesPoint: body.salesPoint,
              number: el.quantity,
            });
          }
        }
      }

      await Sales.create(salesField);

      const itemQuery = {
        name: el.name,
      };

      const itemField = {
        availability: true,
        remaining: [input, output],
        available: el.available,
      };

      const store = await Item.findOneAndUpdate(itemQuery, { $set: itemField });

      io.emit("createdStore", "success");
    });
  });
};

exports.getAllOrder = catchAsync(async (req, res, next) => {
  // 1A) FILTERING

  // 2) SORTING

  // 3) FIELDS

  // 4) PAGINATION

  const result = new APIFeatures(Order.find(), req.query)
    .filter()
    .sort()
    .limitFields();

  const resultLen = await result.query;

  const features = result.paginate();

  const order = await features.query.clone();

  res.status(200).json({
    status: "success",
    resultLength: resultLen.length,
    data: order,
  });
});

exports.updateOrder = (io, socket) => {
  socket.on("updateSale", async (form) => {
    const data = {
      status: form.status,
      deliveredBy: form.username,
    };

    await Sales.findByIdAndUpdate(form.id, data, {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    });

    await Order.findOneAndUpdate(
      { salesId: form.id },
      {
        $set: { status: form.status },
      },
      {
        new: true,
        runValidators: true,
        useFindAndModify: false,
      }
    );
    io.emit("updatedSale", "ok");
  });

  socket.on("updateTransaction", async (form) => {
    const data = {
      transaction: form.transaction,
      paidBy: form.username,
    };

    const sale = await Sales.findByIdAndUpdate(form.id, data, {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    });

    const userStatus = await User.findById(form.customerId);

    if (userStatus.status == "User" && form.transaction == true) {
      await User.updateOne(
        { _id: form.customerId },
        { $inc: { expenses: sale.price } }
      );
    }

    await Order.findOneAndUpdate(
      { salesId: form.id },
      {
        $set: { transaction: form.transaction },
      },
      {
        new: true,
        runValidators: true,
        useFindAndModify: false,
      }
    );
    io.emit("updatedTransaction", "ok");
  });
};

exports.deleteOrder = catchAsync(async (req, res, next) => {
  const order = await Order.findByIdAndDelete(req.params.id);

  if (!order) {
    return next(new AppError("No order found with that ID", 404));
  }

  res.status(200).json({
    status: "success",
    data: order,
  });
});
