const path = require("path");
const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const xss = require("xss-clean");
const chokidar = require("chokidar");

const userRouter = require("./routes/userRoutes");
const roomRouter = require("./routes/roomRoutes");
const bannerRouter = require("./routes/bannerRoutes");
const itemRouter = require("./routes/itemRoutes");
const orderRouter = require("./routes/orderRoutes");
const salesRouter = require("./routes/salesRoutes");
const hotelRouter = require("./routes/hotelRoutes");
const emailRouter = require("./routes/emailRoutes");
const wifiRouter = require("./routes/wifiRoutes");
const postRouter = require("./routes/postRoutes");
const faqRouter = require("./routes/faqRoutes");
const recipeRouter = require("./routes/recipeRoutes");
const aboutRouter = require("./routes/aboutRoutes");
const chatController = require("./controllers/chatController");
const itemController = require("./controllers/itemController");
const orderController = require("./controllers/orderController");
const globalErrorHandler = require("./controllers/errorController");
dotenv.config({ path: "./config.env" });

chokidar.watch("/uploads").on("all", (event, path) => {
  console.log(event, path);
});

const app = express();
const server = require("http").createServer(app);

const io = require("socket.io")(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("New WS connection");

  chatController.createChat(io, socket);
  chatController.endChat(io, socket);
  chatController.getRooms(io, socket);
  chatController.getOffices(io, socket);
  itemController.fetchItems(io, socket);
  orderController.updateOrder(io, socket);
  orderController.createOrder(io, socket);
});

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use(xss());

app.use(cors());
//configure body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//configure body-parser ends here
app.use(morgan("dev")); // configire morgan

app.use((req, res, next) => {
  req.io = io;
  next();
});

app.use("/api/v1/users", userRouter);
app.use("/api/v1/rooms", roomRouter);
app.use("/api/v1/items", itemRouter);
app.use("/api/v1/order", orderRouter);
app.use("/api/v1/sales", salesRouter);
app.use("/api/v1/banner", bannerRouter);
app.use("/api/v1/hotel", hotelRouter);
app.use("/api/v1/email", emailRouter);
app.use("/api/v1/wifi", wifiRouter);
app.use("/api/v1/posts", postRouter);
app.use("/api/v1/faq", faqRouter);
app.use("/api/v1/recipe", recipeRouter);
app.use("/api/v1/about", aboutRouter);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/dist/")));
  app.get("*", (req, res) => {
    res.sendFile(__dirname + "/dist/index.html");
  });
}

app.use(globalErrorHandler);

module.exports = { io, server };
