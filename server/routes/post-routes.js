import { Router } from "express";

import {
	createPost,
	getAllPosts,
	getAllUserPosts,
	getOnePost,
	updateOnePost,
	deleteOnePost
} from "../controllers/post-controller.js";

const postRouter = Router();

// prettier-ignore
postRouter
  .route('/')
  .post(createPost)
  .get(getAllPosts)

// prettier-ignore
postRouter
  .route('/:id')
  .get(getOnePost)
  .put(updateOnePost)
  .patch(updateOnePost)
  .delete(deleteOnePost);

// prettier-ignore
postRouter
  .route('/users/:userId')
  .get(getAllUserPosts)

export default postRouter;
