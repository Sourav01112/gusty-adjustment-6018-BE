const express = require("express");
const cors = require("cors");
const { connection } = require("./db");
const { userRouter } = require("./routes/user.routes");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

app.use("/user", userRouter);

app.listen(PORT, async () => {
  try {
    await connection;
    console.log("Connected to db");
  } catch (error) {
    console.log(error);
  }

  console.log("Server is started on port number", PORT);
});
