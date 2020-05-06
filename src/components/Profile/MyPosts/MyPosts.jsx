import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div className={s.my_post}>
            my post
            <div className={s.new_post}>
                new post
          </div>
            <Post message="my first post" likesCount='1'/>
            <Post message="my second post"likesCount='2'/>
            <Post message="my third post" likesCount='3'/>
        </div>
    )
}
export default MyPosts;