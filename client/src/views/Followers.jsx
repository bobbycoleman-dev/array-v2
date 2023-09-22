import { useEffect, useState } from "react";
import { getOneUserByUsername } from "../services/user-service";

const Followers = ({ user, followType }) => {
	const [followers, setFollowers] = useState([]);
	const [follows, setFollows] = useState([]);
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		if (followType == "followers") {
			user.followers.map((oneUser) => {
				getOneUserByUsername(oneUser)
					.then((oneFollower) => {
						setFollowers([...followers, oneFollower]);
					})
					.catch((err) => console.log(err));
			});
			if (isLoaded) {
				setIsLoaded(false);
			}
			setIsLoaded(true);
		}
		if (followType == "follows") {
			user.follows.map((oneUser) => {
				getOneUserByUsername(oneUser)
					.then((oneFollow) => {
						setFollows([...follows, oneFollow]);
					})
					.catch((err) => console.log(err));
			});
			if (isLoaded) {
				setIsLoaded(false);
			}
			setIsLoaded(true);
		}
	}, [followType]);

	const renderFollows = () => {
		switch (followType) {
			case "followers":
				return user.followers.map((oneUser, idx) => {
					return (
						<div
							key={idx}
							className="w-full hover:bg-primary hover:bg-opacity-10 p-2 cursor-pointer rounded-xl">
							<p>@{oneUser}</p>
							{/* <p>{oneUser.username}</p> */}
						</div>
					);
				});
			case "follows":
				return user.follows.map((oneUser, idx) => {
					return (
						<div
							key={idx}
							className="w-full hover:bg-primary hover:bg-opacity-10 p-2 cursor-pointer rounded-xl">
							<p>@{oneUser}</p>
							{/* <p>{oneUser.username}</p> */}
						</div>
					);
				});
		}
	};

	return <div className="space-y-4 mt-4 text-3xl">{isLoaded && renderFollows()}</div>;
};

export default Followers;
