import { useContext } from "react";
import { UserContext } from "../user.context";
import { fetchFollowers } from "../services/user.api";

export function useUser(){
    const context = useContext(UserContext);

    const {loading, followers, setLoading, setFollowers} = context;

    async function handleFollowers(){
        setLoading(true);
        const data = await fetchFollowers();
        setFollowers(data.followers);
        setLoading(false);
    }

    return {loading, followers, handleFollowers}
}