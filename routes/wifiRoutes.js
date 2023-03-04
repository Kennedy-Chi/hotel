const express = require("express");
const wifiController = require("../controllers/wifiController");
const authController = require("../controllers/authController");
const deleteFile = require("../utils/deleteFile");

const router = express.Router();

router
  .route("/")
  .post(wifiController.createWifi)
  .get(authController.protect, wifiController.getWifi);

router
  .route("/:id")
  .patch(authController.protect, wifiController.updateWifi)
  .delete(
    authController.protect,
    // authController.restrictTo("room"),
    wifiController.deleteWifi
  );

module.exports = router;
