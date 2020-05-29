const actionTypeAddPost = 'ADD-POST';
const actionTypeUpdateTextPost = 'UPDATE-TEXT-POST';

let initState = {
    PostData:
        [
            {postMessage: 'My firs post', id: '1', likesCounter: '11'},
            {postMessage: 'My second post', id: '2', likesCounter: '22'},
            {postMessage: 'My third post', id: '3', likesCounter: '33'},
            {postMessage: 'My third post', id: '4', likesCounter: '44'},
        ],
            newPostText: ''
};

let profileReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypeAddPost:
            let newPost = {
                postMessage: state.newPostText,
                id: 5,
                likesCounter: 0,
            };
            state.PostData.push(newPost);
            state.newPostText = '';
            return state;

        case actionTypeUpdateTextPost:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}

export const actionCreatorAddPost = () => {
    return {
        type: actionTypeAddPost
    }
};

export const actionCreatorUpdateTextPost = (text) => {
    return {
        type: actionTypeUpdateTextPost,
        newText: text,
    }
};

export default profileReducer;