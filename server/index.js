import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();
mongoose
  .connect(process.env.CONNECT, {
    autoIndex: false,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

const app = express();
app.use(express.json());

const port = process.env.PORT || 5050;
app.listen(port, () => {
  console.log(`${port}`, "portda çalışıyor");
});
