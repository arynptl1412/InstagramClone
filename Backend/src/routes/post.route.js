import express from 'express';
import { createPost, getpostDetails, getPosts } from '../controllers/post.controller.js'
import multer from 'multer';

const upload = multer({ storage: multer.memoryStorage() })
const postRouter = express.Router();

//Create A post for logged in User
postRouter.post('/',upload.single("image") ,createPost);

//Get all posts of the logged In User.
postRouter.get('/', getPosts);

//Get all the details of the particular post.
postRouter.get('/details/:postId', getpostDetails)

export { postRouter };