import express from 'express';
import { followUserController, unfollowUserController } from '../controllers/user.controller.js';
import { identifyUser } from '../middlewares/auth.middleware.js';

const userRouter = express.Router();

userRouter.post('/follow/:userId',identifyUser, followUserController);

userRouter.post('/unfollow/:userId', identifyUser, unfollowUserController)

export {userRouter};