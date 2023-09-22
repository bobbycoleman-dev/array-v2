const ProfileInfo = ({ currentUser }) => {
	return (
		<>
			<p className="text-3xl font-bold">{currentUser.name}</p>
			<p className="text-xl">@{currentUser.username}</p>
			<p className="text-black dark:text-slate-200 mt-3">{currentUser.description}</p>
		</>
	);
};

export default ProfileInfo;
