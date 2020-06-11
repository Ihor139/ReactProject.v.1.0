import React from "react";
import Friends from "./Friends";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        ...state,
        FriendsData: state.friendsPage.FriendsData,
    }
}
let mapDispatchToProps = (dispatch) => {
    return{

    }
}

export const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends);