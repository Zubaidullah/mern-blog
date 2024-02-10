import User from "../model/user.model.js";
import bcryptjs from "bcryptjs";

export const registerUser = async (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password || username === "" || email === "" || password === "" ){
        return res.status(400).json({ message: "Please enter all fields" });
    }


    // using bcrypt to hash the password
    const hashPassword = await bcryptjs.hash(password, 10);




    const newUser = new User ({
        username,
        email,
        password: hashPassword
    });

    try {
        const user = await newUser.save();
        res.status(201).json(user);
        res.send("User created successfully");
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

};
