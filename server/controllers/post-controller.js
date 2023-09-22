import Post from "../models/post-model.js";

async function createPost(req, res) {
	try {
		const newPost = await Post.create(req.body);
		res.status(201).json(newPost);
	} catch (error) {
		console.log(error);
		res.status(400).json(error);
	}
}

async function getAllPosts(_, res) {
	try {
		const allPosts = await Post.find().sort({ createdAt: -1 });
		res.status(200).json(allPosts);
	} catch (error) {
		console.log(error);
		res.status(400).json(error);
	}
}

async function getAllUserPosts(req, res) {
	const { userId } = req.params;

	try {
		const allPosts = await Post.find({ poster: userId });
		res.status(200).json(allPosts);
	} catch (error) {
		console.log(error);
		res.status(400).json(error);
	}
}

async function getOnePost(req, res) {
	const { id } = req.params;

	try {
		const onePost = await Post.findById(id);
		res.status(200).json(onePost);
	} catch (error) {
		console.log(error);
		res.status(400).json(error);
	}
}

async function updateOnePost(req, res) {
	const { id } = req.params;

	try {
		const updatedPost = await Post.findByIdAndUpdate(id, req.body, {
			new: true,
			runValidators: true
		});
		res.status(200).json(updatedPost);
	} catch (error) {
		console.log(error);
		res.status(400).json(error);
	}
}

async function deleteOnePost(req, res) {
	const { id } = req.params;
	console.log("deleting post", id);

	try {
		const deletedPost = await Post.findByIdAndDelete(id);
		res.status(200).json(deletedPost);
	} catch (error) {
		console.log(error);
		res.status(400).json(error);
	}
}

export { createPost, getAllPosts, getAllUserPosts, getOnePost, updateOnePost, deleteOnePost };
