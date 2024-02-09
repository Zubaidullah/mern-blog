import mongoose from "mongoose";

// create a schema
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      min: 6,
      max: 20,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 6,
      max: 20,
    },
  },
  { timestamps: true },
);

// create a model
const User = mongoose.model("User", userSchema);

export default User;
