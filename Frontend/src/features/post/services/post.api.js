import axios from 'axios'

const api = axios.create({
    baseURL: "http://localhost:3000/api",
    withCredentials: true
})

export async function fetchFeed() {
    try {
        const response = await api.get("/post/feed");
        return response.data;
    }catch(err){
        throw err
    }
}

export async function createPost(imgUrl, caption){

    const formData = new FormData();

    formData.append("image", imgUrl);
    formData.append("caption", caption)

    try{
        const response = await api.post("/post/", formData);
        return response.data
    }catch(err){
        throw err;
    }
}

export async function likePost(postId){
    try{
        const response = await api.post('/post/like/' + postId);
        return response.data;
    }catch(err){
        throw err
    }
}

export async function unlikePost(postId){
    try{
        const response = await api.post('/post/unlike/' + postId)
        return response.data;
    }catch(err){
        throw err;
    }
}