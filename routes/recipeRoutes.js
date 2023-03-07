const express = require("express");
const recipeController = require("../controllers/recipeController");
const authController = require("../controllers/authController");
const upload = require("../config/multer");
const deleteFile = require("../utils/deleteFile");

const router = express.Router();

router.route("/get-categories").get(recipeController.getRecipeCategory);

router
  .route("/update-status/:id")
  .patch(authController.protect, recipeController.updateStatus);

router
  .route("/")
  .post(upload.upload.single("image"), recipeController.createRecipe)
  .get(recipeController.getRecipe);

router
  .route("/:id")
  .patch(
    authController.protect,
    upload.upload.single("image"),
    recipeController.updateRecipe,
    deleteFile
  )
  .delete(
    authController.protect,
    // authController.restrictTo("room"),
    recipeController.deleteRecipe,
    deleteFile
  );

module.exports = router;
