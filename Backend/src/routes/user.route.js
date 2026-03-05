import express from 'express';
import { followUserController, unfollowUserController, fetchFollowers } from '../controllers/user.controller.js';
import { identifyUser } from '../middlewares/auth.middleware.js';

const userRouter = express.Router();

userRouter.post('/follow/:userId',identifyUser, followUserController);

userRouter.post('/unfollow/:userId', identifyUser, unfollowUserController);

userRouter.get("/followers", identifyUser, fetchFollowers)

export {userRouter};