import { model, Schema } from "mongoose";
import mongooseUniqueValidator from "mongoose-unique-validator";

const EMAIL_REGEX = new RegExp(/^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/);

const UserSchema = new Schema(
	{
		name: {
			type: String,
			required: [true, "Name is required."],
			minlength: [2, "Name must be at least 2 characters."]
		},
		username: {
			type: String,
			required: [true, "Username is required."],
			minlength: [2, "Username must be at least 2 characters."],
			unique: true
		},
		email: {
			type: String,
			required: [true, "Please enter your username"],
			validate: {
				validator: (value) => EMAIL_REGEX.test(value),
				message: "Please enter a valid email."
			},
			unique: true
		},
		follows: [
			{
				type: String
			}
		],
		followers: [
			{
				type: String
			}
		],
		description: {
			type: String,
			maxlength: [280, "Description must be less than 280 characters."],
			default: ""
		},
		firebaseUID: {
			type: String
		}
	},
	{ timestamps: true }
);

UserSchema.plugin(mongooseUniqueValidator);

const User = model("User", UserSchema);

export default User;
