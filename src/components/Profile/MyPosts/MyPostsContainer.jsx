import React from 'react';
import {actionCreatorAddPost, actionCreatorUpdateTextPost} from "../../../redux/profile_reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
    // debugger;
    let state = props.store.getState();

    let addPost = () => {
        let action = actionCreatorAddPost();
        props.store.dispatch(action);
    }

    let onPostUpdate = (text) => {
        let action = actionCreatorUpdateTextPost(text);
        props.store.dispatch(action);
    }

    return (
        <MyPosts actionCreatorAddPost={addPost}
                 actionCreatorUpdateTextPost={onPostUpdate}
                 PostData={state.profilePage.PostData}
                 newPostText={state.profilePage.newPostText}/>
    )
}
export default MyPostsContainer;