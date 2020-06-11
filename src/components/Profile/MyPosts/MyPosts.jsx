import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    // debugger;
    let post = props.PostData.map(p => <Post message={p.postMessage}
                                             likesCount={p.likesCounter}
                                             id={p.id}
                                             key={p.id}/>);

    let newPostElement = React.createRef();

    let addPost = () => {
        props.actionCreatorAddPost();
    }

    let onPostUpdate = () => {
        let text = newPostElement.current.value;
        props.actionCreatorUpdateTextPost(text);
    }

    return (
        <div className={s.my_post}>
            <h3>My post</h3>
            <div className={s.new_post}>
                <div>
                    <textarea onChange={onPostUpdate}
                              ref={newPostElement}
                              value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {post}
            </div>
        </div>
    )
}
export default MyPosts;