import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.listen(3000, () => {
  mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
      console.log("You are now Connected to MongoDB");
      console.log("Server is running on port 3000");
    })
    .catch((error) => {
      console.error("Error connecting to MongoDB:", error);
    });
});
