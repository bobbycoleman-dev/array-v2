import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Feed from "./Feed";
import Navigation from "./Navigation";
import Users from "./Users";
import Post from "./Post";
import Profile from "./Profile";
import Filter from "./Filter";
import PostFormModal from "../components/PostFormModal";
import { getOneUser } from "../services/user-service";

const Home = ({ location }) => {
	const {
		state: { user }
	} = useContext(AuthContext);
	const { dispatch } = useContext(AuthContext);
	const [currentUser, setCurrentUser] = useState({});
	const navigate = useNavigate();
	const { id } = useParams();

	useEffect(() => {
		const getUser = JSON.parse(localStorage.getItem("user"));
		getOneUser(getUser._id)
			.then((user) => {
				localStorage.setItem("user", JSON.stringify(user));
				setCurrentUser(user);
			})
			.catch((err) => console.log(err));
		// onAuthStateChanged(auth, (user) => {
		// 	if (user) {
		// 	} else {
		// 		navigate("/");
		// 	}
		// });
	}, [user]);

	const renderComponent = () => {
		switch (location) {
			case "profile":
				return <Profile user={currentUser} />;
			case "user":
				return <Profile user={id} />;
			case "post":
				return <Post id={id} />;
			case "filter":
				return <Filter />;
			default:
				return <Feed />;
		}
	};

	const logoutUser = () => {
		signOut(auth)
			.then(() => {
				dispatch({ type: "LOGOUT" });
				localStorage.setItem("user", "null");
				navigate("/login");
			})
			.catch((err) => console.log(err));
	};

	return (
		<div className="h-screen max-w-[1400px] mx-auto px-2 flex flex-col-reverse sm:flex-row sm:gap-4 md:max-xl:px-16 xl:px-20 transition-all ease-in">
			<Navigation user={currentUser} logoutUser={logoutUser} />
			{renderComponent()}
			<Users />
			<PostFormModal />
		</div>
	);
};

export default Home;
