import followerModel from '../models/follower.model.js'
import { userModel } from '../models/user.model.js';

async function followUserController(req, res) {
    const followerId = req.user.id;
    const followeeId = req.params.userId;

    if (followerId == followeeId) {
        return res.status(400).json({
            message: "You Cannot Follow yourself."
        })
    }

    const isFolloweeExist = await userModel.findById(followeeId);

    if (!isFolloweeExist) {
        return res.status(404).json({
            message: "Followee with does not exists"
        })
    }

    const isAlreadyFollowing = await followerModel.findOne({
        follower: followerId,
        followee: followeeId
    })

    if (isAlreadyFollowing) {
        return res.status(200).json({
            message: "You are already following the user."
        })
    }

    const followRecord = await followerModel.create({
        follower: followerId,
        followee: followeeId
    })

    res.status(201).json({
        message: "Follow Record is Created",
        followRecord
    })
}

async function unfollowUserController(req, res) {
    const followerId = req.user.id;
    const followeeId = req.params.userId;

    const isUserFollowing = await followerModel.findOne({
        follower: followerId,
        followee: followeeId
    })

    if(!isUserFollowing){
        return res.status(200).json({
            message: "Already not following the user."
        })
    }

    await followerModel.findByIdAndDelete(isUserFollowing._id);

    res.status(200).json({
        message: "Unfollowed Successfully"
    })
}

export { followUserController, unfollowUserController };