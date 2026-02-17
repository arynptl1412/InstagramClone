import { postModel } from '../models/post.model.js';
import imagekit, {toFile} from '@imagekit/nodejs'
import 'dotenv/config'
import jsonwebtoken from 'jsonwebtoken'

const jwt = jsonwebtoken;

const imageKit = new imagekit({
    privateKey: process.env.IMAGEKIT_PRIVATEKEY
})

async function createPost(req, res) {

    const token = req.cookies.jwtToken;

    if(!token){
        return res.status(401).json({
            message: "Token not Provided. Unauthorized access."
        })
    }

    let decoded;

    try{
        decoded = jwt.verify(token, process.env.JWT_SECRET);
    }catch(err){
        res.status(401).json({
            message: "Unauthorized access."
        })
    }

    const file = await imageKit.files.upload({
        file: await toFile(Buffer.from(req.file.buffer), 'file'),
        fileName: "CodeWallpaper",
        folder: "InstagramClonePosts"
    })

    const post = await postModel.create({
        caption: req.body.caption,
        imgUrl: file.url,
        user: decoded.id
    })

    res.status(201).json({
        message: "Post Created Successfully.",
        post
    })
}

export { createPost }