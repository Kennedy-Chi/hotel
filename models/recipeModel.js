const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
  category: String,
  name: String,
  recipe: Array,
  price: Number,
  image: String,
  status: {
    type: Boolean,
    default: false,
  },
  date: {
    type: Date,
    default: new Date(),
  },
});

const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;
