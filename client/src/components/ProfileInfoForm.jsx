import { useEffect, useState } from "react";

const ProfileInfoForm = ({ currentUser, updateProfile }) => {
	const [name, setName] = useState(currentUser.name);
	const [username, setUsername] = useState(currentUser.username);
	const [description, setDescription] = useState(currentUser.description);

	const handleSubmit = (e) => {
		e.preventDefault();
		const updatedUser = {
			name: name,
			username: username,
			description: description
		};
		updateProfile(currentUser._id, updatedUser);
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
				<div className="flex justify-between align-center">
					<input
						className="text-3xl font-bold block bg-transparent border border-slate-500 p-2 rounded-xl"
						type="text"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
					<button className="btn border-black text-black btn-md btn-outline dark:border-white dark:text-slate-200 rounded-full">
						Save
					</button>
				</div>
				<input
					className="text-xl block bg-transparent border border-slate-500 mt-3 p-2 rounded-xl"
					type="text"
					value={username}
					onChange={(e) => setUsername(e.target.value)}
				/>
				<input
					className="text-black dark:text-slate-200 mt-3 block bg-transparent w-full border border-slate-500 p-2 rounded-xl"
					type="text"
					placeholder="description"
					value={description}
					onChange={(e) => setDescription(e.target.value)}
				/>
			</form>
		</>
	);
};

export default ProfileInfoForm;
