import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";



const Profile = (props) => {
    // debugger;
    return (
        <div>
            <ProfileInfo/>
            <MyPosts PostData={props.state.PostData}/>
        </div>
    )
}

export default Profile;