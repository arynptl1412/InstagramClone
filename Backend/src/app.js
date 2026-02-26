import express from 'express';
import cookieParser from 'cookie-parser'
import cors from 'cors'

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    credentials: true,
    origin: "http://localhost:5173"
}));

// importing the Routers
import {authRouter} from './routes/auth.route.js';
import { postRouter } from './routes/post.route.js';
import {userRouter} from './routes/user.route.js'

// using the Router
app.use('/api/auth', authRouter);
app.use('/api/post', postRouter);
app.use('/api/users', userRouter);

export {app};