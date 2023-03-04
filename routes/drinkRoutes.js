const express = require("express");
const drinkController = require("../controllers/drinkController");
const authController = require("../controllers/authController");
const upload = require("../config/multer");
const deleteFile = require("../utils/deleteFile");

const router = express.Router();

router
  .route("/")
  .post(upload.upload.single("picture"), drinkController.createDrink)
  .get(authController.protect, drinkController.getAllDrink);

router
  .route("/:id")
  .delete(
    authController.protect,
    // authController.restrictTo("room"),
    drinkController.deleteDrink,
    deleteFile
  )
  .patch(
    authController.protect,
    upload.upload.single("picture"),
    drinkController.updateDrink,
    deleteFile
  );
// .get(authController.protect, roomController.getRoom)

// router.patch("/book-room/:id", roomController.bookRoom);

module.exports = router;
