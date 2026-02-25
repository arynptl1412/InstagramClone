import mongoose from 'mongoose'

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            lowercase: true,
            minlength: 3,
            maxlength: 30
        },

        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true
        },

        password: {
            type: String,
            required: true,
            minlength: 6
        },

        fullName: {
            type: String,
            trim: true
        },

        bio: {
            type: String,
            default: "",
            maxlength: 150
        },

        profilePic: {
            type: String, // URL (Cloudinary / S3)
            default: "https://ik.imagekit.io/pih7wqiha8/userImage.avif"
        },

        followers: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'users'
        }],
        
        following: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'users'
        }]
    })

const userModel = mongoose.model("users", userSchema);

export { userModel };