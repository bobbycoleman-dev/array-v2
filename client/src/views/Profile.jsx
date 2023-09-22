import { ArrowSmallLeftIcon } from "@heroicons/react/24/solid";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import profileBanner from "../../public/profileBanner.png";
import Avatar from "../components/Avatar";
import PostCard from "../components/PostCard";
import ProfileInfo from "../components/ProfileInfo";
import ProfileInfoForm from "../components/ProfileInfoForm";
import { AuthContext } from "../context/AuthContext";
import { getAllUserPosts } from "../services/post-service";
import { getOneUser, updateOneUser } from "../services/user-service";
import Followers from "./Followers";

const Profile = ({ user }) => {
	const navigate = useNavigate();
	const { dispatch } = useContext(AuthContext);
	const [loggedInUser, setLoggedInUser] = useState(false);
	const [isFollowing, setIsFollowing] = useState(false);
	const [isEditing, setIsEditing] = useState(false);
	const [loaded, setLoaded] = useState(false);
	const [currentUser, setCurrentUser] = useState({});
	const [follower, setFollower] = useState({});
	const [posts, setPosts] = useState([]);
	const [focus, setFocus] = useState("posts");

	useEffect(() => {
		if (typeof user == "string") {
			getOneUser(user)
				.then((oneUser) => {
					const follower = JSON.parse(localStorage.getItem("user"));
					setFollower(follower);
					setCurrentUser(oneUser);

					getAllUserPosts(oneUser._id)
						.then((posts) => {
							if (isFollowing) {
								setIsFollowing(false);
							}
							setIsFollowing(follower.follows.includes(oneUser.username));
							setPosts(posts);
							setLoaded(true);
							if (loggedInUser) {
								setLoggedInUser(false);
							}
						})
						.catch((err) => console.log(err));
				})
				.catch((err) => console.log(err));
		} else {
			setLoggedInUser(true);
			setCurrentUser(user);
			getAllUserPosts(user._id)
				.then((posts) => {
					setPosts(posts);
					setLoaded(true);
				})
				.catch((err) => console.log(err));
		}
	}, [user]);

	const updateLikedPost = (newPost) => {
		const newPosts = posts.map((post) => {
			if (post._id === newPost._id) {
				return newPost;
			}
			return post;
		});
		setPosts(newPosts);
	};

	const updateProfile = (userId, updatedUser) => {
		updateOneUser(userId, updatedUser)
			.then((newUser) => {
				console.log(newUser);
				setCurrentUser({
					...currentUser,
					name: updatedUser.name,
					username: updatedUser.username,
					description: updatedUser.description
				});
				dispatch({
					type: "LOGIN",
					payload: {
						...currentUser,
						name: updatedUser.name,
						username: updatedUser.username,
						description: updatedUser.description
					}
				});
				setIsEditing(false);
			})
			.catch((err) => console.log(err));
	};

	const followUser = () => {
		const updatedFollower = { ...follower, follows: [...follower.follows, currentUser.username] };
		const updatedFollowing = { ...currentUser, followers: [...currentUser.followers, follower.username] };

		updateOneUser(follower._id, updatedFollower)
			.then((newUser) => {
				dispatch({ type: "LOGIN", payload: newUser });
				updateOneUser(currentUser._id, updatedFollowing)
					.then((newUser) => {
						setCurrentUser({ ...currentUser, followers: [...currentUser.followers, follower.username] });
						setIsFollowing(true);
					})
					.catch((err) => console.log(err));
			})
			.catch((err) => console.log(err));
	};

	const renderSection = () => {
		switch (focus) {
			case "follows":
				return <Followers user={currentUser} followType={focus} />;
			case "followers":
				return <Followers user={currentUser} followType={focus} />;
			default:
				return (
					<div className="space-y-4 mt-4">
						{posts.map((post, idx) => {
							return <PostCard key={idx} post={post} updateLikedPost={updateLikedPost} />;
						})}
					</div>
				);
		}
	};

	return (
		<div className="w-full h-full overflow-auto py-4 shadow-2xl space-y-4 sm:border-x sm:border-info  sm:order-2 ">
			<div className="mb-5 sm:hidden">
				<Avatar />
			</div>
			<div className="flex gap-2 items-center cursor-pointer px-4" onClick={() => navigate(-1)}>
				<ArrowSmallLeftIcon className="h-8 text-white" />
				<h2 className="text-2xl font-bold text-black dark:text-slate-200">{currentUser.name}</h2>
			</div>
			{loaded && (
				<div className="h-fit">
					<img src={profileBanner} alt="profileBanner" className="w-full" />
					<div className="-translate-y-20 translate-x-4 flex justify-between items-center px-4">
						<Avatar size={150} />
						{loggedInUser && !isEditing ? (
							<button
								onClick={() => setIsEditing(true)}
								className="btn border-black text-black btn-md btn-outline dark:border-white dark:text-slate-200 rounded-full mt-20 mr-4">
								Edit Profile
							</button>
						) : (
							""
						)}

						{!loggedInUser && !isEditing && !isFollowing ? (
							<button
								onClick={followUser}
								className="btn border-black text-black btn-md btn-outline dark:border-white dark:text-slate-200 rounded-full mt-20 mr-4">
								Follow +
							</button>
						) : (
							""
						)}
					</div>

					<div className="-translate-y-20 text-black dark:text-slate-200 px-4">
						{isEditing ? (
							<ProfileInfoForm currentUser={currentUser} updateProfile={updateProfile} />
						) : (
							<ProfileInfo currentUser={currentUser} />
						)}
						<div className="flex gap-2 mt-3 text-slate-400">
							<p onClick={() => setFocus("follows")} className="cursor-pointer hover:underline">
								<span className="text-primary">{currentUser.follows.length}</span> Following
							</p>
							<p onClick={() => setFocus("followers")} className="cursor-pointer hover:underline">
								<span className="text-primary">{currentUser.followers.length}</span> Followers
							</p>
						</div>
						<div className="mt-6">
							<div className="flex justify-between mx-8">
								<button
									onClick={() => setFocus("posts")}
									className={`text-center text-xl font-extrabold  hover:text-primary ${
										focus == "posts" ? "text-primary" : "text-black dark:text-slate-200"
									}`}>
									Posts
								</button>
								<button
									onClick={() => setFocus("follows")}
									className={`text-center text-xl font-extrabold  hover:text-primary ${
										focus == "follows" ? "text-primary" : "text-black dark:text-slate-200"
									}`}>
									Following
								</button>
								<button
									onClick={() => setFocus("followers")}
									className={`text-center text-xl font-extrabold  hover:text-primary ${
										focus == "followers" ? "text-primary" : "text-black dark:text-slate-200"
									}`}>
									Followers
								</button>
							</div>
							<hr className="border-black border dark:border-slate-200" />
							{renderSection()}
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default Profile;
