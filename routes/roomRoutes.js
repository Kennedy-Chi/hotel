const express = require("express");
const roomController = require("../controllers/roomController");
const authController = require("../controllers/authController");
const upload = require("../config/multer");
const deleteFile = require("../utils/deleteFile");

const router = express.Router();
router.get("/distinct-rooms", roomController.getDistinctRooms);
router.get("/room-history", roomController.getRoomHistory);

router
  .route("/")
  .post(
    upload.upload.fields([
      { name: "roomFacilityIcons", maxCount: 20 },
      { name: "roomPictures", maxCount: 20 },
      { name: "roomVideo", maxCount: 1 },
    ]),
    roomController.createRoom
  )
  .get(authController.protect, roomController.getAllRooms)
  .patch(authController.protect, roomController.resetRooms);

router
  .route("/:id")
  .get(authController.protect, roomController.getRoom)
  .patch(
    authController.protect,
    upload.upload.fields([
      { name: "roomFacilityIcons", maxCount: 20 },
      { name: "roomPictures", maxCount: 20 },
      { name: "roomVideo", maxCount: 1 },
    ]),
    roomController.updateRoom,
    deleteFile
  )
  .delete(
    authController.protect,
    // authController.restrictTo("room"),
    roomController.deleteRoom,
    deleteFile
  );

router.patch("/book-room/:id", roomController.bookRoom);

module.exports = router;
