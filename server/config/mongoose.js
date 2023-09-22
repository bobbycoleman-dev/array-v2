import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const MONGODB_URI = process.env.MONGODB_URI;

async function connectToDb() {
	try {
		await mongoose.connect(MONGODB_URI, {
			dbName: "array-db"
		});

		console.log("✅✅✅Connected to MongoDB✅✅✅.");
	} catch (error) {
		console.error("❌❌❌Failed to connect to MongoDB❌❌❌:", error);
		throw error;
	}
}

export default connectToDb;
