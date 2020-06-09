import React from "react";
import Friends from "../Friends";

export const FriendsContainer = (props) => {
    // debugger;
    let state = props.store.getState();
return (
    <Friends FriendsData ={state.friendsPage.FriendsData}/>
)
}