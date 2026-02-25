import mongoose from 'mongoose';

const followerSchema = new mongoose.Schema({
    follower: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: [true, "Follower is required."]
    },
    followee: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: [true, "Follower is required."]
    }
}, {
    timestamps: true
})

const followerModel = mongoose.model('follows', followerSchema);

export { followerModel }