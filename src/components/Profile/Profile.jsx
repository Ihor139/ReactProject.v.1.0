import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";



const Profile = (props) => {
    // debugger;
    return (
        <div>
            <ProfileInfo/>
            <MyPosts PostData={props.profilePage.PostData}
                     newPostText={props.profilePage.newPostText}
                     addPost={props.addPost}
                     updateTextPost={props.updateTextPost}/>
        </div>
    )
}

export default Profile;