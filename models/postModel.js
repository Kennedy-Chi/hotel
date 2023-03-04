const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  image: String,
  intro: String,
  title: String,
  type: String,
  author: String,
  content: String,
  category: String,
  comments: Number,
  tags: Array,
  status: {
    type: Boolean,
    default: false,
  },
  date: {
    type: Date,
    default: new Date(),
  },
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
