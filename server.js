const mongoose = require("mongoose");
const dotenv = require("dotenv");
const { io, server } = require("./app");

dotenv.config({ path: "./config.env" });

const DB = process.env.DATABASE2.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((con) => {
    console.log("DB connection successful");
  })
  .catch((err) => {
    console.log({ database_error: err });
  });

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`App running on PORT ${PORT}...`);
});
