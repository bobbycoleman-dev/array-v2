import React from "react";
import CommentCard from "./CommentCard";

const CommentList = ({ comments }) => {
	return (
		<div className="border-2 bg-[#284B63] bg-opacity-25 rounded-xl p-4 space-y-5">
			{comments.length > 0
				? comments.map((comment, idx) => {
						return <CommentCard key={idx} comment={comment} />;
				  })
				: "No Comments"}
		</div>
	);
};

export default CommentList;
