import User from "../model/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";

export const registerUser = async (req, res, next) => {
  const { username, email, password } = req.body;

  if (
    !username ||
    !email ||
    !password ||
    username === "" ||
    email === "" ||
    password === ""
  ) {

    // comming from the errorHandler function in the error.js file
    const missingFields = [];
    if (!username) missingFields.push("username");
    if (!email) missingFields.push("email");
    if (!password) missingFields.push("password");

    return next(errorHandler(400, "All fields are required", missingFields));

  }

  // using bcrypt to hash the password
  const hashPassword = await bcryptjs.hash(password, 10);

  const newUser = new User({
    username,
    email,
    password: hashPassword,
  });

  try {
    const user = await newUser.save();
    res.status(201).json(user);
    res.send("User created successfully");
  } catch (error) {
    next(error);
  }
};
