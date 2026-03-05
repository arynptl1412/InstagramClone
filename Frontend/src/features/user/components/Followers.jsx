import React from 'react'

const Followers = ({ followers }) => {
    return (
        followers.map(f => {
            return (
                <div key={f._id} className="userCard">
                    <div className="user">
                        <img src={f.follower.profilePic} alt="" />
                        <p>{f.follower.username}</p>
                    </div>
                </div>
            )
        })
    )
}

export default Followers