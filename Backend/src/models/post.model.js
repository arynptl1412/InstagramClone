import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
    caption: {
        type: String,
        default: ""
    },
    imgUrl: {
        type: String,
        required: [true, "Image URL is required to Create a post."]
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: [true, "UserId is Required for Creating a Post"]
    }
})

const postModel = mongoose.model("userPosts", postSchema);

export { postModel };