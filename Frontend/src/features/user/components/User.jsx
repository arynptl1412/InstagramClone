import React from 'react'

const User = ({ followers }) => {
    return (
        followers.map(f => {
            return (
                <div className="user">
                    <img src={f.follower.profilePic} alt="" />
                    <p>{f.follower.username}</p>
                </div>
            )
        })
    )
}

export default User