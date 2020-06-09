import React from 'react';
import {actionCreatorAddPost, actionCreatorUpdateTextPost} from "../../../redux/profile_reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

//Redux

// const MyPostsContainer = (props) => {
//     // debugger;
//     let state = props.store.getState();
//
//     let addPost = () => {
//         let action = actionCreatorAddPost();
//         props.store.dispatch(action);
//     }
//
//     let onPostUpdate = (text) => {
//         let action = actionCreatorUpdateTextPost(text);
//         props.store.dispatch(action);
//     }
//
//     return (
//         <MyPosts actionCreatorAddPost={addPost}
//                  actionCreatorUpdateTextPost={onPostUpdate}
//                  PostData={state.profilePage.PostData}
//                  newPostText={state.profilePage.newPostText}/>
//     )
// }

// React-Redux library

let mapStateToProps = (state) => {
    return {
        PostData: state.profilePage.PostData,
        newPostText: state.profilePage.newPostText,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        actionCreatorAddPost: () => {
            dispatch(actionCreatorAddPost());
        },
        actionCreatorUpdateTextPost: (text) => {
            let action = actionCreatorUpdateTextPost(text);
            dispatch(action);
        }
    }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
export default MyPostsContainer;