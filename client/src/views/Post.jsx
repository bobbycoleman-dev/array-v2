import { ArrowSmallLeftIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import { getOnePost, updateOnePost } from "../services/post-service";
import Avatar from "../components/Avatar";
import PostCard from "../components/PostCard";
import { useNavigate } from "react-router-dom";
import CommentForm from "../components/CommentForm";
import CommentList from "../components/CommentList";
import { getOneUser } from "../services/user-service";

const Post = ({ id }) => {
	const navigate = useNavigate();
	const [post, setPost] = useState({});
	const [poster, setPoster] = useState({});
	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		getOnePost(id)
			.then((onePost) => {
				getOneUser(onePost.poster)
					.then((onePoster) => {
						setPost(onePost);
						setPoster(onePoster);
						setLoaded(true);
					})
					.catch((err) => console.log(err));
			})
			.catch((err) => console.log(err));
	}, []);

	const addComment = (newComment) => {
		const updatedPost = { ...post, comments: [newComment, ...post.comments] };
		updateOnePost(post._id, updatedPost)
			.then((newPost) => {
				setPost(newPost);
			})
			.catch((err) => console.log(err));
	};

	const updateLikedPost = (newPost) => {
		setPost({ ...post, newPost });
	};

	return (
		<div className="w-full h-full overflow-auto py-4 px-4 shadow-2xl space-y-4 sm:border-x sm:border-info  sm:order-2 ">
			<div className="mb-5 sm:hidden">
				<Avatar />
			</div>
			<div className="flex gap-2 items-center cursor-pointer" onClick={() => navigate(-1)}>
				<ArrowSmallLeftIcon className="h-8 text-white" />
				<h2 className="text-2xl font-bold text-black dark:text-slate-200">Post</h2>
			</div>

			{loaded && <PostCard post={post} updateLikedPost={updateLikedPost} />}
			{loaded && <CommentForm poster={poster} addComment={addComment} />}
			{loaded && <CommentList comments={post.comments} />}
		</div>
	);
};

export default Post;
