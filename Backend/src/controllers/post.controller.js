import { postModel } from '../models/post.model.js';
import imagekit, { toFile } from '@imagekit/nodejs'
import 'dotenv/config'
import jsonwebtoken from 'jsonwebtoken'
import { likesModel } from '../models/likes.model.js'

const jwt = jsonwebtoken;

const imageKit = new imagekit({
    privateKey: process.env.IMAGEKIT_PRIVATEKEY
})

async function createPost(req, res) {

    const file = await imageKit.files.upload({
        file: await toFile(Buffer.from(req.file.buffer), 'file'),
        fileName: "CodeWallpaper",
        folder: "InstagramClonePosts"
    })

    const post = await postModel.create({
        caption: req.body.caption,
        imgUrl: file.url,
        user: req.user.id
    })

    res.status(201).json({
        message: "Post Created Successfully.",
        post
    })
}

async function getPosts(req, res) {
    const posts = await postModel.find({
        user: req.user.id
    })

    res.status(200).json({
        message: "All the post Fetched Successfully.",
        posts
    })
}

async function getpostDetails(req, res) {
    const postId = req.params.postId;

    const postDets = await postModel.findById(postId);

    if (!postDets) {
        return res.status(404).json({
            message: "Post not Found for the requested ID."
        })
    }

    const isValidUser = postDets.user.toString() === req.user.id;

    if (!isValidUser) {
        return res.status(403).json({
            message: "Forbidden Content"
        })
    }

    res.status(200).json({
        message: "Post Detials Were Fetched Successfully.",
        postDets
    })
}

async function likePost(req, res) {
    const postId = req.params.postId;
    const userId = req.user.id;

    const postFound = await postModel.findById(postId);

    if (!postFound) {
        return res.status(404).json({
            message: "This post does not exist."
        });
    }

    await likesModel.updateOne(
        { post: postId, user: userId },
        { $setOnInsert: { post: postId, user: userId } },
        { upsert: true }
    );

    res.status(200).json({
        message: "Liked successfully"
    });
}
async function unlikePostController(req, res) {
    const postId = req.params.postId;
    const userId = req.user.id;

    const isPostLiked = await likesModel.findOne({
        post: postId,
        user: userId
    })

    if (!isPostLiked) {
        return res.status(200).json({
            message: "Already not liking the post."
        })
    }

    await likesModel.findByIdAndDelete(isPostLiked._id);

    res.status(200).json({
        message: "Unliked Successfully."
    })
}

async function fetchFeed(req, res) {
    const userId = req.user.id;

    const posts = await postModel
        .find()
        .sort({ _id: -1 })
        .populate({ path: 'user', select: "-password" })
        .lean();

    const userLikes = await likesModel.find({ user: userId }).lean();

    const likedPostIds = new Set(
        userLikes.map(like => like.post.toString())
    );

    posts.forEach(post => {
        post.isLiked = likedPostIds.has(post._id.toString());
    });

    res.status(200).json({
        message: "Fetched the Feed Successfully.",
        posts
    });
}

export { createPost, getPosts, getpostDetails, likePost, unlikePostController, fetchFeed }