import app from "./config/express.js";
import connectToDb from "./config/mongoose.js";
import dotenv from "dotenv";

dotenv.config();
const PORT = process.env.PORT;

async function start() {
	try {
		await connectToDb();
		app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
	} catch (error) {
		console.error("Error starting the server:", error);
		process.exit(1);
	}
}

start();
