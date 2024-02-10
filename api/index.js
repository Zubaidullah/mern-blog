import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

import userRoute from "./routes/user.route.js";
import authRoute from "./routes/auth.route.js";

dotenv.config();

const app = express();
app.use(express.json());

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

// use the user route
app.use("/api/user", userRoute);
app.use("/api/auth", authRoute);


// middleware to handle errors
app.use((err, req, res, next) => {
  const statusCode = res.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(statusCode).json({
    success: false,
    statusCode,
    message
  });
});
