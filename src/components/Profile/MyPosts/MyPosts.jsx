import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    let PostData =
        [
            {postMessage: 'My firs post', id: '1', likesCounter: '11'},
            {postMessage: 'My second post', id: '2', likesCounter: '22'},
            {postMessage: 'My third post', id: '3', likesCounter: '33'},
        ]
    let post = PostData.map(p => <Post message={p.postMessage} likesCount={p.likesCounter} id={p.id}/>);
    return (
        <div className={s.my_post}>
            <h3>My post</h3>
            <div className={s.new_post}>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {post}
            </div>
        </div>
    )
}
export default MyPosts;