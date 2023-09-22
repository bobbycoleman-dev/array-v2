import { ArrowSmallLeftIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import { getOneUserByUsername } from "../services/user-service";

const Followers = ({ user, followType }) => {
	const [followers, setFollowers] = useState([]);
	const [follows, setFollows] = useState([]);

	useEffect(() => {
		if (followType == "followers") {
			user.followers.map((user) => {
				getOneUserByUsername(user.username)
					.then((oneFollower) => setFollowers([...followers, oneFollower]))
					.catch((err) => console.log(err));
			});
		}
		if (followType == "follows") {
			user.follows.map((user) => {
				getOneUserByUsername(user.username)
					.then((oneFollow) => setFollows([...follows, oneFollow]))
					.catch((err) => console.log(err));
			});
		}
	}, []);

	return (
		<div className="w-full h-full overflow-auto py-4 shadow-2xl space-y-4 sm:border-x sm:border-info  sm:order-2 ">
			<div className="flex gap-2 items-center cursor-pointer px-4" onClick={() => navigate(-1)}>
				<ArrowSmallLeftIcon className="h-8 text-white" />
				<h2 className="text-2xl font-bold text-black dark:text-slate-200">{currentUser.name}</h2>
			</div>
		</div>
	);
};

export default Followers;
