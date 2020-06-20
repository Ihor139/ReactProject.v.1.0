import React from 'react';
import Users from "./Users";
import {connect} from "react-redux";
import {followAC, setUsers, unfollowAC} from "../../redux/users_reducer";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        followAC: (userID) =>{
            dispatch(followAC(userID))
        },
        unfollowAC: (userID) =>{
            dispatch(unfollowAC(userID))
        },
        setUsers: (users) =>{
            dispatch(setUsers(users))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)