import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import LoginRegForm from "../components/LoginRegForm";
import { useState, useContext } from "react";
import { loginUser } from "../services/user-service";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
	const [error, setError] = useState("");
	const navigate = useNavigate();
	const { dispatch } = useContext(AuthContext);

	const userLogin = (auth, userData) => {
		signInWithEmailAndPassword(auth, userData.email, userData.password)
			.then((userCredential) => {
				loginUser({ email: userData.email })
					.then((user) => {
						dispatch({ type: "LOGIN", payload: user });
						localStorage.setItem("user", JSON.stringify(user));
						navigate("/home");
					})
					.catch((err) => console.log(err));
				setError("");
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				console.log(errorCode, errorMessage);
				console.log("Firebase login error caught");
				setError("Invalid Email/Password");
			});
	};

	return (
		<LoginRegForm
			btnLabel={"Login"}
			cardLabel={"Login to [Array]"}
			linkLabel={"Need an Account? Register"}
			link={"register"}
			error={error}
			submitFunc={userLogin}
		/>
	);
};

export default Login;
