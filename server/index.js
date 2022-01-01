const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
const db = require("./models");

const messageRouter = require("./routes/Message");
app.use("/contact", messageRouter);

db.sequelize.sync().then(() => {
  app.listen(3500, () => {
    console.log("listening on port 3500");
  });
});
