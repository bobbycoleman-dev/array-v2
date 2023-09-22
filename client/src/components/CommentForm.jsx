import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Avatar from "./Avatar";

const CommentForm = ({ poster, addComment }) => {
	const {
		state: { user }
	} = useContext(AuthContext);
	const [comment, setComment] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();

		const newComment = {
			comment: comment,
			commenter: user.username
		};
		addComment(newComment);
		setComment("");
	};

	return (
		<div className="border-2 bg-[#284B63] bg-opacity-25 rounded-xl p-4">
			<p className="ms-20 text-black dark:text-slate-200">Replying to @{poster.username}</p>
			<div className="mt-2">
				<form onSubmit={handleSubmit} className="w-full">
					<div className="flex items-center gap-2">
						<Avatar />
						<input
							type="text"
							placeholder=".push() your comment"
							value={comment}
							onChange={(e) => setComment(e.target.value)}
							className="bg-white text-black h-full w-full p-4 rounded-full dark:text-white dark:bg-[#161B22]"
						/>
					</div>
					<div className="text-end mt-3">
						<button className="btn btn-sm btn-primary lowercase rounded-full">.push()</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default CommentForm;
