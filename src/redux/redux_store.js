import {combineReducers, createStore} from "redux";
import profileReducer from "./profile_reducer";
import dialogsReducer from "./dialogs_reducer";
import friendsReducer from "./friends_reducer";
import UsersReducer from "./users_reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    MessagePage: dialogsReducer,
    friendsPage: friendsReducer,
    usersPage: UsersReducer,
});

let store = createStore(reducers);
window.store = store;
export default store;

window.store = store;