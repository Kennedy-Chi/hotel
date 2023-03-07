const Post = require("../models/postModel");
const AppError = require("../utils/appError");
const APIFeatures = require("../utils/apiFeatures");
const catchAsync = require("../utils/catchAsync");
const { findById } = require("../models/postModel");

exports.createPost = catchAsync(async (req, res) => {
  let savedFields = {
    intro: req.body.intro,
    title: req.body.title,
    content: req.body.content,
    author: req.body.author,
    type: req.body.type,
    category: req.body.category,
    tags: req.body.tags,
    image: req.file.filename,
    date: new Date(),
  };

  const post = await Post.create(savedFields);
  res.status(200).json({
    status: "success",
    data: post,
  });
});

exports.getPosts = catchAsync(async (req, res, next) => {
  const result = new APIFeatures(Post.find(), req.query)
    .filter()
    .sort()
    .limitFields();

  const features = result.paginate();

  const posts = await features.query.clone();

  res.status(200).json({
    status: "success",
    data: posts,
  });
});

exports.getAPost = catchAsync(async (req, res, next) => {
  const post = await Post.findById(req.params.id);

  res.status(200).json({
    status: "success",
    data: post,
  });
});

exports.updatePost = catchAsync(async (req, res, next) => {
  let filesToDelete = [];

  let allowedFields = {
    intro: req.body.intro,
    title: req.body.title,
    content: req.body.content,
    type: req.body.type,
    category: req.body.category,
    author: req.body.author,
    tags: req.body.tags,
  };

  if (req.file) {
    allowedFields.image = req.file.filename;
    const oldPost = await findById(req.params.id);
    filesToDelete.push(oldPost.image);
  }

  const post = await Post.findByIdAndUpdate(req.params.id, allowedFields, {
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

  const post = await Post.findByIdAndUpdate(req.params.id, allowedFields, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    status: "success",
    data: post,
  });
});

exports.deletePost = catchAsync(async (req, res, next) => {
  const post = await Post.findByIdAndDelete(req.params.id);

  if (!post) {
    return next(new AppError("No post found with that ID", 404));
  }

  req.fileNames = post.image;

  next();
});
