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
        return res.status(401).json({
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

async function getPosts(req, res){
    const token = req.cookies.jwtToken;

    if(!token){
        return res.status(401).json({
            message: "Token not provided."
        })
    }

    let decoded;

    try{
        decoded = jwt.verify(token, process.env.JWT_SECRET);
    }catch(err){
        return res.status(401).json({
            message: "Unauthorized Access"
        })
    }

    const userId = decoded.id;

    const posts = await postModel.find({
        user:userId
    })

    res.status(200).json({
        message: "All the post Fetched Successfully.",
        posts
    })
}

async function getpostDetails(req, res){
    const token = req.cookies.jwtToken;

    if(!token){
        return res.status(401).json({
            message: "Token not provided."
        })
    }

    let decoded;

    try{
        decoded = jwt.verify(token, process.env.JWT_SECRET);
    }catch(err){
        return res.status(401).json({
            message: "Unauthorized Access."
        })
    }

    const userId = decoded.id;
    
    const postId = req.params.postId;

    const postDets = await postModel.findById(postId);

    if(!postDets){
        return res.status(404).json({
            message: "Post not Found for the requested ID."
        })
    }

    const isValidUser = postDets.user.toString() === userId;

    if(!isValidUser){
        return res.status(403).json({
            message: "Forbidden Content"
        })
    }

    res.status(200).json({
        message: "Post Detials Were Fetched Successfully.",
        postDets
    })
}

export { createPost, getPosts, getpostDetails }