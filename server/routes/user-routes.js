import { Router } from "express";
import {
	loginUser,
	registerUser,
	getAllUsers,
	getOneUser,
	updateOneUser,
	getOneUserByUsername
} from "../controllers/user-controller.js";

const userRouter = Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.get("/:id", getOneUser);

userRouter.patch("/:id", updateOneUser);
userRouter.get("/", getAllUsers);

userRouter.get("/follows/:username", getOneUserByUsername);

export default userRouter;
