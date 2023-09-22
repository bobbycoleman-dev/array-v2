import Avatar from "./Avatar";

const CommentCard = ({ comment }) => {
	return (
		<div className="">
			<div className="flex gap-2">
				<Avatar />
				<div className="text-black dark:text-slate-200">
					<p>@{comment.commenter} commented</p> <p>{comment.comment}</p>
				</div>
			</div>
		</div>
	);
};

export default CommentCard;
