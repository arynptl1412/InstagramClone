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
            type: String,
            default: "https://ik.imagekit.io/pih7wqiha8/userImage.avif"
        },

        followersCount: {
            type: Number,
            default: 0
        },

        followingCount: {
            type: Number,
            default: 0
        }

    }, { timestamps: true });

const userModel = mongoose.model("users", userSchema);

export { userModel };