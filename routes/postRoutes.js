const express = require("express");
const postController = require("../controllers/postController");
const authController = require("../controllers/authController");
const upload = require("../config/multer");
const deleteFile = require("../utils/deleteFile");

const router = express.Router();

router
  .route("/update-status/:id")
  .patch(authController.protect, postController.updateStatus);

router
  .route("/")
  .post(upload.upload.single("image"), postController.createPost)
  .get(authController.protect, postController.getPosts);

router
  .route("/:id")
  .patch(
    authController.protect,
    upload.upload.single("image"),
    postController.updatePost,
    deleteFile
  )
  .delete(
    authController.protect,
    // authController.restrictTo("room"),
    postController.deletePost,
    deleteFile
  );

module.exports = router;
