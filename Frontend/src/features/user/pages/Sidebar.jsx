import React, { useEffect, useState } from 'react'
import '../style/sidebar.scss'
import Followers from '../components/Followers';
import { useUser } from '../hooks/useUser';
import Following from '../components/Following';

const Sidebar = () => {

    const { loading, followers, handleFollowers, following, handleFollowing } = useUser();

    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);

    useEffect(() => {
        handleFollowers();
        handleFollowing();
    }, []);

    return (
        <div className='sidebar'>
            <div className='followers'>
                <div className={`heading ${isOpen1 ? "open" : ""}`} onClick={() => setIsOpen1(prev => !prev)}>
                    <p>Followers</p>
                    <p>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 15.0006L7.75732 10.758L9.17154 9.34375L12 12.1722L14.8284 9.34375L16.2426 10.758L12 15.0006Z"></path></svg>
                    </p>
                </div>

                <div className={`users ${isOpen1 ? "open" : ""}`}>
                    <Followers followers={followers}/>
                </div>
            </div>

            <div className='following'>
                <div className={`heading ${isOpen2 ? "open" : ""}`} onClick={() => setIsOpen2(prev => !prev)}>
                    <p>Following</p>
                    <p>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 15.0006L7.75732 10.758L9.17154 9.34375L12 12.1722L14.8284 9.34375L16.2426 10.758L12 15.0006Z"></path></svg>
                    </p>
                </div>

                <div className={`users ${isOpen2 ? "open" : ""}`}>
                    <Following following={following}/>
                </div>
            </div>

            <div className='others'>
                <div className={`heading ${isOpen3 ? "open" : ""}`} onClick={() => setIsOpen3(prev => !prev)}>
                    <p>Recommended</p>
                    <p>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 15.0006L7.75732 10.758L9.17154 9.34375L12 12.1722L14.8284 9.34375L16.2426 10.758L12 15.0006Z"></path></svg>
                    </p>
                </div>

                <div className={`users ${isOpen3 ? "open" : ""}`}>

                </div>
            </div>
        </div>
    )
}

export default Sidebar