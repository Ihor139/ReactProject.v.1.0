import profileReducer from "./profile_reducer";
import dialogsReducer from "./dialogs_reducer";
import friendsReducer from "./friends_reducer";

let store = {
    _state: {
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
    },

    getState() {
        return this._state
    },

    _renderEntireTree() {
        console.log('State changed')
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.MessagePage = dialogsReducer(this._state.MessagePage, action);
        this._state.friendsPage = friendsReducer(this._state.friendsPage, action);
    this._renderEntireTree(this._state)
    },

    subscribe(observer) {
        this._renderEntireTree = observer;
    },
}

export default store;

window.store = store;