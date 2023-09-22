import { Link } from "react-router-dom";
import { useState } from "react";
import { auth } from "../firebase";

const initialRegister = {
	name: "",
	username: "",
	email: "",
	password: "",
	confirmPassword: ""
};

const LoginRegForm = ({ btnLabel, cardLabel, linkLabel, link, error, submitFunc }) => {
	const [registerForm, setRegisterForm] = useState(initialRegister);
	const [passwordError, setPasswordError] = useState("");

	const handleChange = (e) => {
		setRegisterForm({ ...registerForm, [e.target.name]: e.target.value });
		if (e.target.name == "confirmPassword") {
			if (e.target.value != registerForm.password) {
				setPasswordError("Passwords do not match.");
			} else {
				setPasswordError("");
			}
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		submitFunc(auth, registerForm);
	};

	return (
		<div className="py-12 px-4 md:px-24 ">
			<div className="flex flex-col-reverse md:flex-row justify-end gap-3 items-center">
				<Link to={`/${link}`} className="hover:text-blue-400 active:text-blue-400">
					{linkLabel}
				</Link>
				<h1 className="text-5xl dark:text-slate-200">[Array]</h1>
			</div>

			<div className="h-full flex justify-center mt-20 md:mt-48">
				<div className="card w-96 min-h-96 shadow-2xl bg-white dark:bg-[#3C6E71]">
					<div className="card-body">
						<p className="card-title dark:text-slate-200 mx-auto">{cardLabel}</p>
						<p className="text-center text-xs mb-5">
							The code-sharing social media platform for developers
						</p>
						{error && <p className="text-center text-red-400">{error}</p>}
						<form onSubmit={handleSubmit} className="form-control">
							{btnLabel == "Register" && (
								<>
									<div>
										<label className="label text-black dark:text-white">Full Name</label>
										<input
											type="text"
											name="name"
											className="input input-bordered input-info w-full dark:bg-[#D9D9D9] text-black"
											value={registerForm.firstName}
											onChange={(e) => handleChange(e)}
										/>
									</div>

									<div>
										<label className="label text-black dark:text-white">Username</label>
										<input
											type="text"
											name="username"
											className="input input-bordered input-info w-full dark:bg-[#D9D9D9] text-black"
											value={registerForm.username}
											onChange={(e) => handleChange(e)}
										/>
									</div>
								</>
							)}
							<div>
								<label className="label text-black dark:text-white">Email</label>
								<input
									type="text"
									name="email"
									className="input input-bordered input-info w-full dark:bg-[#D9D9D9] text-black"
									value={registerForm.email}
									onChange={(e) => handleChange(e)}
								/>
							</div>
							<div>
								<label className="label text-black dark:text-white">Password</label>
								<input
									type="password"
									name="password"
									className="input input-bordered input-info w-full dark:bg-[#D9D9D9] text-black"
									value={registerForm.password}
									onChange={(e) => handleChange(e)}
								/>
							</div>
							{btnLabel == "Register" && (
								<>
									<div>
										<label className="label text-black dark:text-white">Confirm Password</label>
										<input
											type="password"
											name="confirmPassword"
											className="input input-bordered input-info w-full dark:bg-[#D9D9D9] text-black"
											value={registerForm.confirmPassword}
											onChange={(e) => handleChange(e)}
										/>
										{passwordError && <p className="text-error">{passwordError}</p>}
									</div>
								</>
							)}
							<div className="text-end mt-5">
								<button className="btn bg-[#284B63] text-white shadow-xl active:bg-slate-900">
									{btnLabel}
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LoginRegForm;
