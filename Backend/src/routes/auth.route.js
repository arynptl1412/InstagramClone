import express from 'express';
import 'dotenv/config';
import { loginController, registerController } from '../controllers/auth.controller.js';

const authRouter = express.Router();

authRouter.post('/register', registerController);

authRouter.post('/login', loginController);

export { authRouter };