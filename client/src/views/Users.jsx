import { useEffect, useState } from "react";
import { getAllUsers } from "../services/user-service";
import { getAllPosts } from "../services/post-service";
import UserListCard from "../components/UserListCard";

const Users = () => {
	const [users, setUsers] = useState([]);
	const [posts, setPosts] = useState([]);
	const [postCounts, setPostCounts] = useState({});
	const [filteredUser, setFilteredUser] = useState([]);
	const totalCount = posts.length;
	const postKeys = Object.keys(postCounts).sort();

	useEffect(() => {
		getAllUsers()
			.then((users) => {
				const currentUser = JSON.parse(localStorage.getItem("user"));
				const currentUserRemoved = users.filter((user) => user._id != currentUser._id);
				setUsers(currentUserRemoved);
			})
			.catch((err) => console.log(err));
		getAllPosts()
			.then((posts) => {
				setPosts(posts);
				const allPostCounts = {};
				for (const obj of posts) {
					if (allPostCounts[obj.languageTitle]) {
						allPostCounts[obj.languageTitle]++;
					} else {
						allPostCounts[obj.languageTitle] = 1;
					}
				}
				setPostCounts(allPostCounts);
			})
			.catch((err) => console.log(err));
	}, []);

	const findUser = (e) => {
		const value = e.target.value.toLowerCase();
		const filtered = users.filter((user) => user.name.toLowerCase().includes(value));
		setFilteredUser(filtered);
	};

	return (
		<div className="w-full min-h-full hidden border-x border-info py-4 px-4 shadow-2xl lg:block lg:w-96 lg:order-last overflow-scroll">
			<div>
				<input
					type="search"
					className="rounded-full w-full h-8 px-4 shadow-xl text-black"
					placeholder=".find(user)"
					onChange={findUser}
				/>
			</div>

			<div className="mt-4 space-y-2 shadow-xl rounded-xl border border-slate-500">
				<h3 className="text-center text-xl font-bold text-black dark:text-slate-200">Who to Follow</h3>
				{filteredUser.length > 0
					? filteredUser.map((user, idx) => {
							return <UserListCard key={idx} user={user} />;
					  })
					: users.map((user, idx) => {
							return <UserListCard key={idx} user={user} />;
					  })}
			</div>
			<div className="mt-4 space-y-2 shadow-xl rounded-xl border border-slate-500 p-2">
				<h3 className="text-center text-lg font-bold text-black dark:text-slate-200">Trending Languages</h3>
				{postCounts &&
					postKeys.map((post, idx) => {
						return (
							<section key={idx} className="text-black dark:text-slate-200 cursor-default">
								<p>{post}</p>
								<progress
									className="progress progress-accent dark:progress-primary w-full"
									value={postCounts[post]}
									max={totalCount}></progress>
							</section>
						);
					})}
			</div>
		</div>
	);
};

export default Users;
