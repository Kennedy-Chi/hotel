const express = require("express");
const orderController = require("../controllers/orderController");
const authController = require("../controllers/authController");

const router = express.Router();

router
  .route("/")
  .post(orderController.createOrder)
  .get(authController.protect, orderController.getAllOrder);

router
  .route("/:id")
  .delete(
    authController.protect,
    // authController.restrictTo("room"),
    orderController.deleteOrder
  )
  .patch(authController.protect, orderController.updateOrder);

module.exports = router;
