import axios from "axios";

const http = axios.create({
	baseURL: "http://localhost:8000/api"
});

async function registerUser(registerForm) {
	try {
		const response = await http.post("/users/register", registerForm);
		return response.data;
	} catch (error) {
		console.log(error);
		throw error;
	}
}

async function loginUser(loginForm) {
	try {
		const response = await http.post("/users/login", loginForm);
		return response.data;
	} catch (error) {
		console.log(error);
		throw error;
	}
}

async function getOneUser(userId) {
	try {
		const response = await http.get(`/users/${userId}`);
		return response.data;
	} catch (error) {
		console.log(error);
		throw error;
	}
}

async function updateOneUser(userId, user) {
	try {
		const response = await http.patch(`/users/${userId}`, user);
		return response.data;
	} catch (error) {
		throw error;
	}
}

async function getOneUserByUsername(username) {
	try {
		const response = await http.get(`/users/follows/${username}`);
		return response.data;
	} catch (error) {
		throw error;
	}
}

async function getAllUsers() {
	try {
		const response = await http.get("/users");
		return response.data;
	} catch (error) {
		console.log(error);
		throw error;
	}
}

export { registerUser, loginUser, getOneUser, getAllUsers, updateOneUser, getOneUserByUsername };
