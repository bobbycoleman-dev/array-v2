import React, { useEffect, useState } from "react";
import Avatar from "../components/Avatar";
import PostCard from "../components/PostCard";
import PostForm from "../components/PostForm";
import { getAllPosts } from "../services/post-service";

const Feed = () => {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		getAllPosts()
			.then((posts) => setPosts(posts))
			.catch((err) => console.log(err));
	}, []);

	const addPostToTop = (newPost) => {
		setPosts([newPost, ...posts]);
	};

	const updateLikedPost = (newPost) => {
		const newPosts = posts.map((post) => {
			if (post._id === newPost._id) {
				return newPost;
			}
			return post;
		});
		setPosts(newPosts);
	};

	return (
		<div className="w-full h-full overflow-auto py-4 px-4 shadow-2xl space-y-4 sm:border-x sm:border-info  sm:order-2 ">
			<div className="mb-5 sm:hidden">
				<Avatar />
			</div>
			<h2 className="text-2xl font-bold text-black dark:text-slate-200">Home</h2>
			<PostForm updateDom={addPostToTop} />

			{posts.map((post, idx) => (
				<section key={idx}>
					<PostCard post={post} updateLikedPost={updateLikedPost} />
				</section>
			))}
		</div>
	);
};

export default Feed;
