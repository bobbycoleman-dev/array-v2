import axios from "axios";

const http = axios.create({
	baseURL: "http://localhost:8000/api"
});

async function createPost(post) {
	try {
		const res = await http.post("/posts", post);
		return res.data;
	} catch (error) {
		throw error;
	}
}

async function getAllPosts() {
	try {
		const response = await http.get("/posts");
		return response.data;
	} catch (error) {
		throw error;
	}
}

async function getAllUserPosts(userId) {
	try {
		const response = await http.get(`/posts/users/${userId}`);
		return response.data;
	} catch (error) {
		throw error;
	}
}

async function getOnePost(postId) {
	try {
		const response = await http.get(`/posts/${postId}`);
		return response.data;
	} catch (error) {
		throw error;
	}
}

async function updateOnePost(postId, post) {
	try {
		const response = await http.patch(`/posts/${postId}`, post);
		return response.data;
	} catch (error) {
		throw error;
	}
}

async function deleteOnePost(postId) {
	try {
		const response = await http.delete(`/posts/${postId}`);
		return response.data;
	} catch (error) {
		throw error;
	}
}

export { createPost, getAllPosts, getOnePost, updateOnePost, deleteOnePost, getAllUserPosts };
