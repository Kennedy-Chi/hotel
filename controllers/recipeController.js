const Recipe = require("../models/recipeModel");
const AppError = require("../utils/appError");
const APIFeatures = require("../utils/apiFeatures");
const catchAsync = require("../utils/catchAsync");

exports.createRecipe = catchAsync(async (req, res) => {
  let savedFields = {
    category: req.body.category,
    name: req.body.name,
    recipe: req.body.recipe,
    price: req.body.price,
    image: req.file.filename,
  };

  const recipe = await Recipe.create(savedFields);

  res.status(200).json({
    status: "success",
    data: recipe,
  });
});

exports.getRecipe = catchAsync(async (req, res, next) => {
  const result = new APIFeatures(Recipe.find(), req.query)
    .filter()
    .sort()
    .limitFields();

  const features = result.paginate();

  const recipe = await features.query.clone();

  res.status(200).json({
    status: "success",
    data: recipe,
  });
});

exports.updateRecipe = catchAsync(async (req, res, next) => {
  let filesToDelete = [];
  let allowedFields = {
    category: req.body.category,
    name: req.body.name,
    price: req.body.price,
    recipe: req.body.recipe,
  };

  if (req.file) {
    allowedFields.image = req.file.filename;
    const oldRecipe = await Recipe.findById(req.params.id);
    filesToDelete.push(oldRecipe.banner);
  }

  await Recipe.findByIdAndUpdate(req.params.id, allowedFields, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  req.fileNames = filesToDelete;

  next();
});

exports.updateStatus = catchAsync(async (req, res, next) => {
  let allowedFields = {
    status: req.body.status,
  };
  await Recipe.findByIdAndUpdate(req.params.id, allowedFields, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    status: "success",
  });
});

exports.deleteRecipe = catchAsync(async (req, res, next) => {
  const filesToDelete = [];

  const recipe = await Recipe.findById(req.params.id);

  await Recipe.findByIdAndDelete(req.params.id);

  if (!recipe) {
    return next(new AppError("No recipe found with that ID", 404));
  }

  filesToDelete.push(recipe.image);

  req.fileNames = filesToDelete;

  next();
});
