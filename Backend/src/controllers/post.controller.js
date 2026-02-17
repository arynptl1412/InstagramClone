import { postModel } from '../models/post.model.js';
import imagekit, {toFile} from '@imagekit/nodejs'
import 'dotenv/config'

const imageKit = new imagekit({
    privateKey: process.env.IMAGEKIT_PRIVATEKEY
})

async function createPost(req, res) {
    const file = await imageKit.files.upload({
        file: await toFile(Buffer.from(req.file.buffer), 'file'),
        fileName: "CodeWallpaper"
    })

    res.send({
        file
    })

}

export { createPost }