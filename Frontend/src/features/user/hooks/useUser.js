import { useContext } from "react";
import { UserContext } from "../user.context";
import { fetchFollowers, fetchFollowing, unfollow } from "../services/user.api";

export function useUser(){
    const context = useContext(UserContext);

    const {loading, followers, setLoading, setFollowers, following, setFollowing} = context;

    async function handleFollowers(){
        setLoading(true);
        const data = await fetchFollowers();
        setFollowers(data.followers);
        setLoading(false);
    }

    async function handleFollowing(){
        setLoading(true);
        const data = await fetchFollowing();
        setFollowing(data.following);
        setLoading(false);
    }

    async function handleUnfollow(userId){
        setLoading(true);
        const data = await unfollow(userId);
        handleFollowing();
        setLoading(false);
    }

    return {loading, followers, following, handleFollowers, handleFollowing, handleUnfollow}
}