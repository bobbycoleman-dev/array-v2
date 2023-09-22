import { ArrowSmallLeftIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import Avatar from "../components/Avatar";
import PostCard from "../components/PostCard";
import { getAllPosts } from "../services/post-service";
import { useNavigate } from "react-router-dom";

const Filter = () => {
	const navigate = useNavigate();
	const [posts, setPosts] = useState([]);
	const [filteredPosts, setFilteredPosts] = useState([]);

	useEffect(() => {
		getAllPosts()
			.then((posts) => setPosts(posts))
			.catch((err) => console.log(err));
	}, []);

	const updateLikedPost = (newPost) => {
		const newPosts = posts.map((post) => {
			if (post._id === newPost._id) {
				return newPost;
			}
			return post;
		});
		setPosts(newPosts);
	};

	const filterLanguage = (e) => {
		const value = e.target.value.toLowerCase();
		const filtered = posts.filter((post) => post.languageTitle.toLowerCase().includes(value));
		setFilteredPosts(filtered);
	};
	const filterDescription = (e) => {
		const value = e.target.value.toLowerCase();
		const filtered = posts.filter((post) => post.description.toLowerCase().includes(value));
		setFilteredPosts(filtered);
	};

	return (
		<div className="w-full h-full overflow-auto py-4 px-4 shadow-2xl space-y-4 sm:border-x sm:border-info  sm:order-2 ">
			<div className="mb-5 sm:hidden">
				<Avatar />
			</div>
			<div className="flex gap-2 items-center cursor-pointer px-4" onClick={() => navigate(-1)}>
				<ArrowSmallLeftIcon className="h-8 text-white" />
				<h2 className="text-2xl font-bold text-black dark:text-slate-200">Filter Posts</h2>
			</div>
			<div className="flex gap-3">
				<input
					type="search"
					className="rounded-full w-full h-8 px-4 shadow-xl text-black"
					placeholder=".filter(language)"
					onChange={filterLanguage}
				/>
				<input
					type="search"
					className="rounded-full w-full h-8 px-4 shadow-xl text-black"
					placeholder=".filter(description)"
					onChange={filterDescription}
				/>
			</div>
			{filteredPosts.length > 0
				? filteredPosts.map((post, idx) => (
						<section key={idx}>
							<PostCard post={post} updateLikedPost={updateLikedPost} />
						</section>
				  ))
				: posts.map((post, idx) => (
						<section key={idx}>
							<PostCard post={post} updateLikedPost={updateLikedPost} />
						</section>
				  ))}
		</div>
	);
};

export default Filter;
