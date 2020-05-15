let renderEntireTree = () => {
    console.log('State changed')
}

let state = {
    profilePage: {
        PostData:
            [
                {postMessage: 'My firs post', id: '1', likesCounter: '11'},
                {postMessage: 'My second post', id: '2', likesCounter: '22'},
                {postMessage: 'My third post', id: '3', likesCounter: '33'},
                {postMessage: 'My third post', id: '4', likesCounter: '44'},
            ],
        newPostText: '',
    },

    MessagePage: {
        DialogsData:
            [
                {nameUser: 'Ihor', id: '1'},
                {nameUser: 'Vallya', id: '2'},
                {nameUser: 'Vasya', id: '3'},
                {nameUser: 'Petya', id: '4'},
                {nameUser: 'Roma', id: '5'},
                {nameUser: 'Vova', id: '6'},
            ],

        MessageData:
            [
                {message: 'Message 1', id: '1'},
                {message: 'Message 2', id: '2'},
                {message: 'Message 3', id: '3'},
                {message: 'Message 4', id: '4'},
                {message: 'Message 5', id: '5'},
                {message: 'Message 6', id: '6'},
            ],
        newTextMessage: '',
    },

    friendsPage: {
        FriendsData:
            [
                {friendName: 'Vitya', img: '', id: '1'},
                {friendName: 'Vasya', img: '', id: '2'},
                {friendName: 'Vitalya', img: '', id: '3'},
            ],
    },
}

window.state = state;

export let addPost = () => {
    let newPost = {
        postMessage: state.profilePage.newPostText,
        id: 5,
        likesCounter: 0,
    };
    state.profilePage.PostData.push(newPost);
    state.profilePage.newPostText = '';
    renderEntireTree(state);
};

export let updateTextPost = (newText) => {
    state.profilePage.newPostText = newText;
    renderEntireTree(state);
};

export let addMessage = () => {
    let newElement = {
        message: state.MessagePage.newTextMessage,
        id: 8,
    };
    state.MessagePage.MessageData.push(newElement);
    state.MessagePage.newTextMessage = ''
    renderEntireTree(state);
};

export let updateTextMessage = (newText) => {
    state.MessagePage.newTextMessage = newText;
    renderEntireTree(state);
};

export  let subscribe = (observer) => {
    renderEntireTree = observer;
}

export default state;