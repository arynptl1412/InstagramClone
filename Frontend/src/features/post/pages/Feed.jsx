import React, { useEffect } from 'react';
import '../style/feed.scss';
import Post from '../components/Post';
import { usePost } from '../hooks/usePost';
import Nav from '../../../shared/components/Nav.jsx'

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
            <Nav />
            <div className="feed">
                <div className="posts">

                    {feed?.filter(Boolean).map((post) => (
                        <Post
                            key={post._id}
                            user={post.user}
                            post={post}
                        />
                    ))}

                </div>
            </div>
        </main>
    );
};

export default Feed;