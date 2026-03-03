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

    async function handleLike(postId) {
        const data = await likePost(postId);
        setFeed(prev =>
            prev.map(post =>
                post._id === postId
                    ? { ...post, isLiked: true }
                    : post
            )
        );
    }

    async function handleUnlike(postId) {
        const data = await unlikePost(postId);
        setFeed(prev =>
            prev.map(post =>
                post._id === postId
                    ? { ...post, isLiked: false }
                    : post
            )
        );
    }

    return { loading, feed, post, handleFeed, handleCreatePost, handleLike, handleUnlike }
}