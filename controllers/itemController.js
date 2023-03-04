const Item = require("../models/itemModel");
const AppError = require("../utils/appError");
const APIFeatures = require("../utils/apiFeatures");
const catchAsync = require("../utils/catchAsync");

exports.createItem = catchAsync(async (req, res) => {
  let savedFields = {
    image: req.file.filename,
    name: req.body.name,
    price: req.body.price,
    category: req.body.category,
    type: req.body.type,
    buyingPrice: req.body.buyingPrice,
    storeInputUnit: req.body.storeInputUnit,
    storeOutputUnit: req.body.storeOutputUnit,
    storeOutputPerInput: req.body.storeOutputPerInput,
    sellingUnit: req.body.sellingUnit,
    salesPoint: req.body.salesPoint,
  };

  const item = await Item.create(savedFields);

  res.status(200).json({
    status: "success",
    data: item,
  });
});

exports.getAllItem = catchAsync(async (req, res, next) => {
  // 1A) FILTERING

  // 2) SORTING

  // 3) FIELDS

  // 4) PAGINATION

  const result = new APIFeatures(Item.find(), req.query)
    .filter()
    .sort()
    .limitFields();

  const resultLen = await result.query;

  const features = result.paginate();

  const item = await features.query.clone();

  res.status(200).json({
    status: "success",
    resultLength: resultLen.length,
    data: item,
  });
});

exports.updateItem = catchAsync(async (req, res, next) => {
  let filesToDelete = [];

  const oldItem = await Item.findById(req.params.id);

  let allowedFields = {
    name: req.body.name,
    price: req.body.price,
    category: req.body.category,
    type: req.body.type,
    buyingPrice: req.body.buyingPrice == null || "" ? 0 : req.body.buyingPrice,
    storeInputUnit: req.body.storeInputUnit,
    storeOutputUnit:
      req.body.storeOutputUnit == null || "" ? 0 : req.body.storeOutputUnit,
    storeOutputPerInput:
      req.body.storeOutputPerInput == null || ""
        ? 0
        : req.body.storeOutputPerInput,
    sellingUnit: req.body.sellingUnit,
    salesPoint: req.body.salesPoint,
  };

  if (req.file) {
    allowedFields.image = req.file.filename;
    filesToDelete.push(oldItem.image);
  }

  const item = await Item.findByIdAndUpdate(req.params.id, allowedFields, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  req.fileNames = filesToDelete;

  next();
});

exports.deleteItem = catchAsync(async (req, res, next) => {
  const stock = await Item.findByIdAndDelete(req.params.id);

  if (!stock) {
    return next(new AppError("No stock found with that ID", 404));
  }

  req.fileNames = stock.image;

  next();
});

exports.fetchItems = (io, socket) => {
  socket.on("fetchItems", async (item) => {
    const type = item.type;
    const items = await Item.find({
      name: { $regex: item.keyWord, $options: "$i" },
      type: type,
    });
    io.emit("fetchedItems", items);
  });
};

exports.updateAllItem = catchAsync(async (req, res, next) => {
  let allowedFields = {
    status: "Exhausted",
    availability: false,
    remaining: [0, 0],
    available: [],
  };

  const item = await Item.updateMany(
    {},
    { $set: allowedFields },
    {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    }
  );

  res.status(200).json({
    status: "success",
  });
});
