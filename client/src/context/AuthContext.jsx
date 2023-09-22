import { createContext, useEffect, useReducer } from "react";

export const AuthContext = createContext({
	state: null,
	dispatch: () => {}
});

function authReducer(state, action) {
	switch (action.type) {
		case "LOGIN":
			return { user: action.payload };
		case "LOGOUT":
			return { user: null };
		default:
			console.log("Unexpected action type:", action.type);
			return state;
	}
}

function AuthProvider({ children }) {
	const [state, dispatch] = useReducer(authReducer, { user: null });

	useEffect(() => {
		const user = JSON.parse(localStorage.getItem("user"));
		if (user) {
			dispatch({ type: "LOGIN", payload: user });
		}
	}, [state.user?.id]);

	return <AuthContext.Provider value={{ state, dispatch }}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
