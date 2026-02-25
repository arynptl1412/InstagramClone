import mongoose from 'mongoose';

const likesSchema = new mongoose.Schema({
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'userPosts',
        required: [true, "Post is Required."]
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: [true, 'User is Required.']
    }
}, {
    timestamps: true
})

likesSchema.index({ post: 1, user: 1 }, { unique: true });

const likesModel = mongoose.model('postLikes', likesSchema);

export { likesModel };