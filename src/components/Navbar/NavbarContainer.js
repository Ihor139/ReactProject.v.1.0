import React from "react";
import Navbar from "./Navbar";

export const NavbarContainer = (props) =>{
    debugger;
    let state = props.store.getState();
    return (
        <Navbar friendsData = {state.friendsPage.FriendsData}/>
    )
}