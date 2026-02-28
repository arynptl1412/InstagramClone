import { useContext } from 'react'
import {fetchFeed} from '../services/post.api.js'
import { PostContext } from '../post.context.jsx'

export function usePost(){
    const context = useContext(PostContext);

    const {loading, setLoading, post, setPost, feed, setFeed} = context;

    async function handleFeed(){
        setLoading(true);
        const data = await fetchFeed();
        setFeed(data.posts);
        setLoading(false);
    }

    return {loading, feed, post, handleFeed}
}