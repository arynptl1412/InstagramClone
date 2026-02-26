import express from 'express';
import 'dotenv/config';
import { loginController, registerController, fetchProfileController } from '../controllers/auth.controller.js';
import {identifyUser} from '../middlewares/auth.middleware.js'

const authRouter = express.Router();

authRouter.post('/register', registerController);

authRouter.post('/login', loginController);

authRouter.get('/fetchProfile', identifyUser, fetchProfileController);

export { authRouter };