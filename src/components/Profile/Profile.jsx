import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';


const Profile = () => {
  return (
    <div>
      <div className='header_img'>
        <img src='https://ytali.com/wp-content/uploads/2019/04/Ytali-Header-1000x500px.png' />
      </div>
      <div className='avatar_description'>
        avatar
        </div>
      <MyPosts />
    </div>
  )
}

export default Profile;