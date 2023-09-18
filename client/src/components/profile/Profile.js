import * as React from 'react';
import photo from "./avatar.png"
import './profile.css'

const Profile = () => {
    return (
        <>
            <div className="profile">
                <h1>Portfolio CREPIN Dylan</h1>
                <img className="profile-image" src={photo} alt="Profile" />
            </div>
        </>
    )
}

export default Profile
