import React from 'react';
import Users from "./UsersClass";
import {connect} from "react-redux";
import {followAC, setCurrentPageAC, setTotalCountAC, setUsers, unfollowAC} from "../../redux/users_reducer";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage,
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
        setCurrentPage: (pageNumber)=>{
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalCount: (totalCount)=>{
            dispatch(setTotalCountAC(totalCount))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)