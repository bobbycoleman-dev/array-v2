// ES Module import/export syntax
import express from "express";
import morgan from "morgan";
import cors from "cors";
import postRouter from "../routes/post-routes.js";
import userRouter from "../routes/user-routes.js";

const app = express();

// Middleware
app.use(express.json(), cors());
app.use(morgan("dev"));

// Routes
app.use("/api/users", userRouter);
app.use("/api/posts", postRouter);

export default app;
