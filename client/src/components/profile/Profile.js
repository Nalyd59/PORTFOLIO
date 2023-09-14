import * as React from 'react';
import photo from "./avatar.png"

const Profile = () => {
    return (
        <>
        <div className="profile"style={{margin: "20px", display: "flex", justifyContent: "center"}}>
            <div className="profile-image">
                <img
                src={photo}
                alt="Profile"
                style={{width: "300px", height: "300px", margin: "0 auto", borderRadius:  "300px", border: "5px solid  #000"}}
                />
            </div>
        </div>
        </>
    )
}

export default Profile
