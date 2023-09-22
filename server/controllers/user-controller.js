import User from "../models/user-model.js";

async function registerUser(req, res) {
	try {
		const user = await User.create(req.body);
		res.status(201).json(user);
	} catch (err) {
		console.log(err);
		res.status(422).json(err);
	}
}

async function loginUser(req, res) {
	try {
		const { email } = req.body;
		console.log(email);
		const user = await User.findOne({ email });

		res.status(200).json(user);
	} catch (err) {
		console.log(err);
		res.status(400).json(err);
	}
}

async function getAllUsers(req, res) {
	try {
		const users = await User.find();
		res.status(200).json(users);
	} catch (err) {
		console.log(err);
		res.status(400).json(err);
	}
}

async function getOneUser(req, res) {
	const { id } = req.params;

	try {
		const oneUser = await User.findById(id);
		res.status(200).json(oneUser);
	} catch (error) {
		console.log(error);
		res.status(400).json(error);
	}
}

async function getOneUserByUsername(req, res) {
	const { username } = req.params;
	try {
		const oneUser = await User.findOne({ username });
		res.status(200).json(oneUser);
	} catch (error) {
		console.log(error);
		res.status(400).json(error);
	}
}

async function updateOneUser(req, res) {
	const { id } = req.params;

	try {
		const updatedUser = await User.findByIdAndUpdate(id, req.body);
		res.status(200).json(updatedUser);
		console.log(updatedUser);
	} catch (error) {
		console.log(error);
		res.status(400).json(error);
	}
}

export { registerUser, loginUser, getAllUsers, getOneUser, updateOneUser, getOneUserByUsername };
