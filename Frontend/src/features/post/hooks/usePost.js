import { useContext, useEffect } from 'react'
import { createPost, fetchFeed, likePost, unlikePost } from '../services/post.api.js'
import { PostContext } from '../post.context.jsx'

export function usePost() {
    const context = useContext(PostContext);

    const { loading, setLoading, post, setPost, feed, setFeed } = context;

    async function handleFeed() {
        setLoading(true);
        const data = await fetchFeed();
        setFeed(data.posts);
        setLoading(false);
    }

    async function handleCreatePost(image, caption) {
        setLoading(true);
        const data = await createPost(image, caption)
        setFeed([data.post], ...feed)
        setLoading(false)
    }

    useEffect(()=>{
        handleFeed();
    }, [])

    return { loading, feed, post, handleFeed, handleCreatePost, handleLikePost, handleUnlikePost }
}