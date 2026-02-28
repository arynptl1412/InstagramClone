import React, { useEffect } from 'react';
import '../style/feed.scss';
import Post from '../components/Post';
import { usePost } from '../hooks/usePost';

const Feed = () => {

    const { feed, handleFeed, loading } = usePost();

    useEffect(() => {
        handleFeed();
    }, []);

    if (loading) {
        return (
            <main>
                <h1>Loading...</h1>
            </main>
        );
    }
    
    return (
        <main className='feed-page'>
            <div className="feed">
                <div className="posts">
                    {
                        feed?.map((post)=>{
                            return <Post key={post._id} user={post.user} post={post}/>
                        })
                    }
                </div>
            </div>
        </main>
    );
};

export default Feed;