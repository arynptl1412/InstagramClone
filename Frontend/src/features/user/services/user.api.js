import axios from 'axios'

const api = axios.create({
    baseURL: "http://localhost:3000/api/users",
    withCredentials:true
})

export async function fetchFollowers(){
    try{
        const response = await api.get("/followers");
        return response.data
    }catch(err){
        throw err;
    }
}

export async function fetchFollowing(){
    try{
        const response = await api.get("/following");
        return response.data;
    }catch(err){
        throw err;
    }
}

export async function unfollow(userId){
    try{
        const response = await api.post("/unfollow/" + userId);
        return response.data;
    }catch(err){
        throw err;
    }
}