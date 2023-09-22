import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./views/Home";
import Login from "./views/Login";
import Register from "./views/Register";
import { useEffect } from "react";

function App() {
	const navigate = useNavigate();

	useEffect(() => {
		const user = JSON.parse(localStorage.getItem("user"));
		if (user) {
			navigate("/home");
		}
	}, []);

	return (
		<>
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route path="/login" element={<Login />} />
				<Route path="/home" element={<Home location={"feed"} />} />
				<Route path="/filter" element={<Home location={"filter"} />} />
				<Route path="/post/:id" element={<Home location={"post"} />} />
				<Route path="/profile/:id" element={<Home location={"profile"} />} />
				<Route path="/user/:id" element={<Home location={"user"} />} />
			</Routes>
		</>
	);
}

export default App;
