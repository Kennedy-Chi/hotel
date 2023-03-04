const express = require("express");
const foodController = require("../controllers/foodController");
const authController = require("../controllers/authController");
const upload = require("../config/multer");
const deleteFile = require("../utils/deleteFile");

const router = express.Router();

router
  .route("/")
  .post(upload.upload.single("foodPicture"), foodController.createFood)
  .get(authController.protect, foodController.getAllFood);

router
  .route("/:id")
  .delete(
    authController.protect,
    // authController.restrictTo("room"),
    foodController.deleteFood,
    deleteFile
  )
  .patch(
    authController.protect,
    upload.upload.single("foodPicture"),
    foodController.updateFood,
    deleteFile
  );
// .get(authController.protect, roomController.getRoom)

// router.patch("/book-room/:id", roomController.bookRoom);

module.exports = router;
