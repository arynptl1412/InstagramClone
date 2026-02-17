import express from 'express';
import { createPost } from '../controllers/post.controller.js'
import multer from 'multer';

const upload = multer({ storage: multer.memoryStorage() })
const postRouter = express.Router();

postRouter.post('/',upload.single("image") ,createPost);

export { postRouter };