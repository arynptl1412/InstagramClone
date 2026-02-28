import express from 'express';
import { createPost, getpostDetails, getPosts, likePost, unlikePostController, fetchFeed } from '../controllers/post.controller.js'
import multer from 'multer';
import {identifyUser} from '../middlewares/auth.middleware.js'

const upload = multer({ storage: multer.memoryStorage() })
const postRouter = express.Router();

//Create A post for logged in User
postRouter.post('/',upload.single("image"), identifyUser,createPost);

//Get all posts of the logged In User.
postRouter.get('/', identifyUser, getPosts);

//Get all the details of the particular post.
postRouter.get('/details/:postId', identifyUser, getpostDetails);

postRouter.post('/like/:postId', identifyUser, likePost);

postRouter.post('/unlike/:postId', identifyUser, unlikePostController);

postRouter.get('/feed', identifyUser, fetchFeed);

export { postRouter };