import { userModel } from '../models/user.model.js';
import crypto from 'crypto';
import jsonwebtoken from 'jsonwebtoken';

const jwt = jsonwebtoken;

async function registerController(req, res) {
    const { username, email, password, fullname, bio, profilePic } = req.body;

    const isUserExists = await userModel.findOne({
        $or: [
            { username },
            { email }
        ]
    });

    if (isUserExists) {
        return res.status(409).json({
            message: "User already Exists" + (isUserExists.email == email ? "Email already Exists" : "Username Already Exists")
        })
    };

    const hash = crypto.createHash('sha256').update(password).digest('hex');

    const user = await userModel.create({
        username,
        email,
        password: hash,
        fullname,
        bio,
        profilePic
    });

    const token = jwt.sign({
        id: user._id
    }, process.env.JWT_SECRET);

    res.cookie("jwtToken", token);

    res.status(201).json({
        message: "User Created Successfully.",
        user: {
            username,
            email,
            bio,
            fullname,
            profilePic
        },
        token
    });
}

async function loginController(req, res) {
    const { username, email, password } = req.body;

    const user = await userModel.findOne({
        $or: [
            { username },
            { email }
        ]
    })

    if (!user) {
        return res.status(404).json({
            message: "User is not registered. Please Register First."
        });
    };

    const hash = crypto.createHash("sha256").update(password).digest('hex');

    const isPassValid = hash === user.password;

    if (!isPassValid) {
        return res.status(401).json({
            message: "Password is Incorrect."
        })
    }

    const token = jwt.sign(
        { id: user._id },
        process.env.JWT_SECRET,
        { expiresIn: "1D" }
    );

    res.cookie("jwtToken", token);

    res.status(200).json({
        message: "Logged in Successfullly."
    })
}

export {registerController, loginController}