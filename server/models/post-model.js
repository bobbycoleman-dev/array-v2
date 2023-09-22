import { model, Schema } from "mongoose";

const PostSchema = new Schema(
	{
		languageMd: {
			type: String,
			required: [true, "Please select a language"]
		},
		languageTitle: {
			type: String
		},
		code: {
			type: String,
			required: [true, "Code block is required for posting."],
			minlength: [5, "Code must be at least 5 characters"]
		},
		description: {
			type: String,
			minlength: [3, "Description must be at least 3 characters."],
			maxlength: [280, "Description cannot be more than 280 characters."]
		},
		poster: {
			type: String
		},
		comments: [
			{
				comment: {
					type: String,
					minlength: [3, "Description must be at least 3 characters."],
					maxlength: [280, "Description cannot be more than 280 characters."]
				},
				commenter: {
					type: String
				}
			}
		],
		likes: {
			type: Number,
			default: 0
		}
	},
	{ timestamps: true }
);

const Post = model("Post", PostSchema);

export default Post;
