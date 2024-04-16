import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import router from "./routes/userRouter.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use("/users", router);

const port = process.env.PORT || 5050;
app.listen(port, () => {
  mongoose
    .connect(process.env.CONNECT, {
      autoIndex: false,
    })
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log(err));
});
