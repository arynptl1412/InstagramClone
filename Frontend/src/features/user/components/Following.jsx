import React from 'react'
import { useUser } from '../hooks/useUser'

const Following = ({ following }) => {

    const { loading, handleUnfollow } = useUser();

    if (!following || following.length === 0) {
        return (
            <div className="userCard">
                <p>No Following</p>
            </div>
        )
    }

    return (
        <>
            {following.map(f => (
                <div key={f._id} className="userCard">
                    <div className="user">
                        <img src={f.followee.profilePic} alt="" />
                        <p>{f.followee.username}</p>
                    </div>

                    <button
                        className='folUnfol'
                        onClick={() => handleUnfollow(f.followee._id)}
                    >
                        Unfollow
                    </button>
                </div>
            ))}
        </>
    )
}

export default Following