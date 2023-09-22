import React from "react";
import placeholderAvatar from "../assets/placeholder-avatar.jpg";

const Avatar = (props) => {
	const { size } = props;
	const imgSize = () => {
		if (size) {
			return size;
		} else {
			return 48;
		}
	};

	return (
		<div className="avatar">
			<div className="rounded-full border-2 border-gray-950" style={{ width: size ? size : 48 }}>
				<img src={placeholderAvatar} />
			</div>
		</div>
	);
};

export default Avatar;
