const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

//Register
const register = async (req, res) => {
	try {
		const { username, password, email, phNumber } = req.body;

		//generate password
		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(password, salt);

		//create new user
		const newUser = await new User({
			username: username.toLowerCase(),
			email: email.toLowerCase(),
			password: hashedPassword,
			phNumber: phNumber,
		});
		try {
			const uniqueUser = await User.findOne({ username });
			const oldUser = await User.findOne({ email });
			if (oldUser) return res.status(400).json({ message: "user Already exists", success: false });
			if (uniqueUser) return res.status(400).json({ message: "Username already taken", success: false });
			const user = await newUser.save();
			res.status(200).json({
				accessToken: jwt.sign(
					user._id.toString(),
					process.env.ACCESS_TOKEN_SECRET
				),
				message: "user created",
				success: true,
			});
		} catch (error) {
			console.log(error)
			res.status(500).json({message:"Internal Server error",success:false});
		}

		//save user to database and return response
	} catch (error) {
		console.log(error);
		res.status(500).json({message:"Internal Server error",success:false});
	}
};

//login
const login = async (req, res) => {
	try {
		const user = req.body.email
			? await User.findOne({ email: req.body.email.toLowerCase() })
			: await User.findOne({ username: req.body.username.toLowerCase() });
		if (!user) {
			!user && res.status(404).json({ message: "User does not exists !!", success: false });
		} else {
			const validPassword = await bcrypt.compare(
				req.body.password,
				user.password
			);
			!validPassword
				? res.status(400).json({ message: "Invalid Credentials !!", success: false })
				: res.status(200).json({
					accessToken: jwt.sign(
						user._id.toString(),
						process.env.ACCESS_TOKEN_SECRET
					),
					success: true,
				});
		}
	} catch (error) {
		console.log(error);
		res.status(500).json({message:"Internal Server error",success:false});
	}
};


const resetPassword = async (req, res) => {
	try {
		const { email, password, newpassword } = req.body;
		const user = await User.findOne({ email: email.toLowerCase() });
		const verified = await bcrypt.compare(password, user.password);
		if (verified) {
			const salt = await bcrypt.genSalt(10);
			const hashed = await bcrypt.hash(newpassword, salt);
			await User.findByIdAndUpdate(user._id, { password: hashed, }, { new: true, },);
			res.status(200).json({success:true, message:"Password Changed Successfully"});
		} else {
			throw new Error({message:"Wrong Password",success:false});
		}
	} catch (error) {
		console.log(error);
		res.status(500).json({message:"Worng Credentials",success:false});
	}

};

module.exports = {
	register,
	login,
	resetPassword
};
