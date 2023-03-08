const Room = require("../models/roomModel");
const RoomHistory = require("../models/roomHistoryModel");
const Sales = require("../models/salesModel");
const User = require("../models/userModel");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");
const APIFeatures = require("../utils/apiFeatures");

exports.createRoom = catchAsync(async (req, res) => {
  let icons = [];
  let pictures = [];
  let facilities = [];

  if (req.files.roomPictures) {
    req.files.roomPictures.forEach((el) => {
      pictures.push(el.filename);
    });
  } else {
    req.body.roomPicturesText.forEach((el) => {
      pictures.push(el);
    });
  }

  let savedFields = {
    roomName: req.body.roomName,
    roomNumber: req.body.roomNumber,
    roomPrice: req.body.roomPrice,
    roomDetails: req.body.roomDetails,
    roomServices: req.body.roomServices,
    roomPictures: pictures,
  };

  if (req.files.roomFacilityIcons) {
    req.files.roomFacilityIcons.forEach((el) => {
      icons.push(el.filename);
    });

    for (let int = 0; int < req.files.roomFacilityIcons.length; int++) {
      let facilityObj = {
        icon: "",
        title: "",
      };
      facilityObj.icon = req.files.roomFacilityIcons[int].filename;
      facilityObj.title = req.body.roomFacilityText[int];
      facilities.push(facilityObj);
    }

    savedFields.roomFacilities = facilities;
  } else if (req.body.roomFacilityIconText) {
    for (let int = 0; int < req.body.roomFacilityIconText.length; int++) {
      let facilityObj = {
        icon: "",
        title: "",
      };
      facilityObj.icon = req.body.roomFacilityIconText[int];
      facilityObj.title = req.body.roomFacilityText[int];
      facilities.push(facilityObj);
    }
    savedFields.roomFacilities = facilities;
  }

  if (req.files.roomVideo) {
    savedFields.roomVideo = req.files.roomVideo[0].filename;
  } else if (req.body.roomVideoText) {
    savedFields.roomVideo = req.files.roomVideoText[0].filename;
  }

  const newRoom = await Room.create(savedFields);

  res.status(200).json({
    status: "success",
    data: newRoom,
  });
});

exports.getDistinctRooms = catchAsync(async (req, res, next) => {
  const rooms = await Room.aggregate([
    {
      $group: {
        originalId: { $first: "$_id" },
        _id: "$roomName",
        roomPrice: { $first: "$roomPrice" },
        roomPictures: { $first: "$roomPictures" },
        roomFacilities: { $first: "$roomFacilities" },
      },
    },
    {
      $project: {
        _id: "$originalId",
        roomName: "$_id",
        roomPrice: "$roomPrice",
        roomPictures: "$roomPictures",
        roomFacilities: "$roomFacilities",
      },
    },
  ]);

  res.status(200).json({
    status: "success",
    data: rooms,
  });
});

exports.getAllRooms = catchAsync(async (req, res, next) => {
  // 1A) FILTERING

  // 2) SORTING

  // 3) FIELDS

  // 4) PAGINATION

  const result = new APIFeatures(Room.find(), req.query)
    .filter()
    .sort()
    .limitFields();

  const resultLen = await result.query;

  const features = result.paginate();

  const rooms = await features.query.clone();

  res.status(200).json({
    status: "success",
    resultLength: resultLen.length,
    data: rooms,
  });
});

exports.getRoomHistory = catchAsync(async (req, res, next) => {
  // 1A) FILTERING

  // 2) SORTING

  // 3) FIELDS

  // 4) PAGINATION

  const result = new APIFeatures(RoomHistory.find(), req.query)
    .filter()
    .sort()
    .limitFields();

  const resultLen = await result.query;

  const features = result.paginate();

  const rooms = await features.query.clone();

  res.status(200).json({
    status: "success",
    resultLength: resultLen.length,
    data: rooms,
  });
});

exports.updateRoom = catchAsync(async (req, res, next) => {
  let icons = [];
  let facilities = [];
  let pictures = [];

  let oldRoomFileNames = [];
  let newRoomFileNames = [];
  let filesToDelete = [];

  const oldRoom = await Room.findById(req.params.id);
  oldRoom.roomFacilities.forEach((el) => {
    oldRoomFileNames.push(el.icon);
  });

  oldRoomFileNames = oldRoomFileNames.concat(oldRoom.roomPictures);

  if (oldRoom.roomVideo != undefined) {
    oldRoomFileNames.push(oldRoom.roomVideo);
  }

  let allowedFields = {
    roomName: req.body.roomName,
    roomNumber: req.body.roomNumber,
    roomPrice: req.body.roomPrice,
    roomDetails: req.body.roomDetails,
    roomServices: req.body.roomServices,
  };

  if (req.files.roomPictures) {
    req.files.roomPictures.forEach((el) => {
      pictures.push(el.filename);
    });
    allowedFields.roomPictures = pictures;
  } else {
    let pictureText = req.body.roomPicturesText;
    if (!Array.isArray(pictureText)) {
      pictureText = new Array(pictureText);
    }
    pictureText.forEach((el) => {
      pictures.push(el);
    });
    allowedFields.roomPictures = pictures;
  }

  if (req.files.roomVideo) {
    allowedFields.roomVideo = req.files.roomVideo[0].filename;
  }

  if (req.body.roomFacilityIconText) {
    req.body.roomFacilityIconText.forEach((el) => {
      icons.push(el);
    });
  }

  if (req.files.roomFacilityIcons) {
    req.files.roomFacilityIcons.forEach((el) => {
      icons.push(el.filename);
    });

    for (let int = 0; int < req.body.roomFacilityText.length; int++) {
      let facilityObj = {
        icon: "",
        title: "",
      };
      facilityObj.icon = icons[int];
      facilityObj.title = req.body.roomFacilityText[int];
      facilities.push(facilityObj);
    }

    allowedFields.roomFacilities = facilities;
  } else {
    for (let int = 0; int < req.body.roomFacilityText.length; int++) {
      let facilityObj = {
        icon: "",
        title: "",
      };
      facilityObj.icon = icons[int];
      facilityObj.title = req.body.roomFacilityText[int];
      facilities.push(facilityObj);
    }

    allowedFields.roomFacilities = facilities;
  }

  const newRoom = await Room.findByIdAndUpdate(req.params.id, allowedFields, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  newRoom.roomFacilities.forEach((el) => {
    newRoomFileNames.push(el.icon);
  });

  newRoomFileNames = newRoomFileNames.concat(newRoom.roomPictures);

  if (newRoom.roomVideo != undefined) {
    newRoomFileNames.push(newRoom.roomVideo);
  }

  oldRoomFileNames.forEach((el) => {
    if (!newRoomFileNames.includes(el)) {
      filesToDelete.push(el);
    }
  });

  // req.fileNames = filesToDelete;
  req.fileNames = [];

  next();
});

exports.deleteRoom = catchAsync(async (req, res, next) => {
  const roomDetails = await Room.findById(req.params.id);
  let oldRoomFileNames = [];

  const room = await Room.findByIdAndDelete(req.params.id);

  if (!room) {
    return next(new AppError("No room found with that ID", 404));
  }

  roomDetails.roomFacilities.forEach((el) => {
    oldRoomFileNames.push(el.icon);
  });

  const fileArr = oldRoomFileNames.concat(roomDetails.roomPictures);

  if (roomDetails.roomVideo != undefined) {
    fileArr.push(roomDetails.roomVideo);
  }

  req.fileNames = fileArr;
  next();
});

exports.getRoom = catchAsync(async (req, res, next) => {
  const room = await Room.findById(req.params.id);

  if (!room) {
    return next(new AppError("No room found with that ID", 404));
  }
  res.status(200).json({
    status: "success",
    data: room,
  });
});

exports.bookRoom = catchAsync(async (req, res, next) => {
  const roomId = req.params.id;
  const checkIn = new Date(req.body.checkIn).getTime();
  const checkOut = new Date(req.body.checkOut).getTime();
  const bookedRooms = req.body.bookedRooms;
  const expenses = req.body.balance + req.body.expenses;

  const allowedFields = {
    bookingDetails: {
      occupantId: req.body.occupantId,
      checkIn: req.body.checkIn,
      checkOut: req.body.checkOut,
      bookedDate: req.body.bookedDate,
    },
    isBooked: true,
  };

  const room = await Room.findByIdAndUpdate(roomId, allowedFields, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  const user = await User.findByIdAndUpdate(
    req.body.occupantId,
    {
      bookedRooms: bookedRooms,
      activeRoom: room.roomNumber,
      lastBooked: checkIn,
      hasBooked: true,
      expenses: expenses,
    },
    {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    }
  );

  const historyFields = {
    name: room.roomName,
    number: room.roomNumber,
    price: req.body.balance,
    username: user.username,
    userId: user._id,
    checkIn: req.body.checkIn,
    checkOut: req.body.checkOut,
    transaction: req.body.transaction,
  };

  await RoomHistory.create(historyFields);

  const formatDate = (date) => {
    const day = new Date(date);
    return `${day.getDate()}/${day.getMonth()}/${day.getFullYear()}`;
  };

  const salesFields = {
    description: [room.roomName, `Room ${room.roomNumber}`],
    price: req.body.balance,
    customerId: user._id,
    customer: user.username,
    deliveredBy: `Reception: ${formatDate(req.body.bookedDate)}`,
    checkInCheckOut: [checkIn, checkOut],
    paidBy: user.autoRegister
      ? user.username
      : `Reception: ${formatDate(req.body.bookedDate)}`,
    salesPoint: `Reception`,
    status: true,
    transaction: true,
    day: formatDate(req.body.bookedDate),
    time: new Date(req.body.bookedDate),
  };

  await Sales.create(salesFields);

  const startBooking = new Date(checkIn).getSeconds();

  const cancelBooking = async () => {
    let activeRoom;
    let newRooms = [];

    user.bookedRooms.forEach((el) => {
      if (el != room.roomNumber) {
        newRooms.push(el);
      }
    });

    if (user.activeRoom == room.roomNumber) {
      if (newRooms[0] == undefined) {
        activeRoom = "";
      } else {
        activeRoom = newRooms[0];
      }
    } else {
      activeRoom = user.activeRoom;
    }

    const allowedFields = {
      isBooked: false,
      bookingDetails: {},
    };

    const newFields = {
      bookedRooms: newRooms,
      activeRoom: activeRoom,
    };

    await Room.findByIdAndUpdate(roomId, allowedFields, {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    });

    await User.findByIdAndUpdate(user._id, newFields, {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    });
  };

  const startTime = async () => {
    let remHours;
    if (
      Math.floor(checkOut / (60 * 60 * 24)) ==
      Math.floor(checkIn / (60 * 60 * 24))
    ) {
      remHours = Math.floor(24 - new Date().getHours());
    } else {
      remHours = Math.floor(
        12 +
          (new Date(checkOut).getTime() - new Date().getTime()) /
            (60 * 60 * 1000)
      );
    }

    // setTimeout(cancelBooking, 0.2 * 60 * 1000);
    setTimeout(cancelBooking, remHours * 60 * 60 * 1000);
  };

  setTimeout(startTime, (startBooking + 2) * 1000);

  res.status(200).json({
    status: "success",
    data: room,
  });
});

exports.resetRooms = catchAsync(async (req, res, next) => {
  let allowedFields = {
    isBooked: false,
    bookingDetails: {
      occupantId: "",
      checkIn: "",
      checkOut: "",
      bookedDate: "",
    },
  };

  const newRoom = await Room.updateMany({}, { $set: allowedFields });

  res.status(200).json({
    status: "success",
  });
});
