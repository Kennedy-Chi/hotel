const Wifi = require("../models/wifiModel");
const AppError = require("../utils/appError");
const APIFeatures = require("../utils/apiFeatures");
const catchAsync = require("../utils/catchAsync");

exports.createWifi = catchAsync(async (req, res) => {
  //SAVED AUTOMATIC PASSWORD
  const generatePassword = async (
    length,
    useUpperCase,
    useNumbers,
    useSpecialChar
  ) => {
    let characterSet = "abcdefghijklmnopqrstuvwxyz";
    if (useUpperCase) characterSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (useNumbers) characterSet += "0123456789";
    if (useSpecialChar) characterSet += "!@#$%^&*()_+-=[]{}|;':,.<>/?\\";

    let password = "";
    for (let i = 0; i < length; i++) {
      password += characterSet.charAt(
        Math.floor(Math.random() * characterSet.length)
      );
    }

    return password;
  };

  // SAVED MANUAL PASSWORD
  const savedPassword = async () => {
    let savedFields = {
      username: req.body.username,
      password: req.body.password,
    };
    await Wifi.create(savedFields);
  };

  // CHECK IF THE MODE IS AUTOMATIC OR MANUAL
  if (req.body.mode) {
    for (let i = 0; i < req.body.wifiNumber; i++) {
      let password = await generatePassword(
        req.body.length,
        req.body.useUpperCase,
        req.body.useNumbers,
        req.body.useSpecialChar
      );

      let savedFields = {
        username: req.body.username,
        password: password,
      };

      await Wifi.create(savedFields);
    }
  } else {
    savedPassword();
  }
  res.status(200).json({
    status: "success",
  });
});

exports.getWifi = catchAsync(async (req, res, next) => {
  const result = new APIFeatures(Wifi.find(), req.query)
    .filter()
    .sort()
    .limitFields();

  const features = result.paginate();

  const wifi = await features.query.clone();

  res.status(200).json({
    status: "success",
    data: wifi,
  });
});

exports.updateWifi = catchAsync(async (req, res, next) => {
  let allowedFields = {
    username: req.body.username,
    password: req.body.password,
  };

  const wifi = await Wifi.findByIdAndUpdate(req.params.id, allowedFields, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });
  res.status(200).json({
    status: "success",
    data: wifi,
  });
});

exports.deleteWifi = catchAsync(async (req, res, next) => {
  const wifi = await Wifi.findByIdAndDelete(req.params.id);

  if (!wifi) {
    return next(new AppError("No wifi found with that ID", 404));
  }

  res.status(200).json({
    status: "success",
  });
});
