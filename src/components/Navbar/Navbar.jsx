import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import Friends from "../Friends/Friends";

const Navbar = () => {
    // debugger;
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/profile" activeClassName={s.active}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/messages" activeClassName={s.active}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/news" activeClassName={s.active}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/music" activeClassName={s.active}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/settings" activeClassName={s.active}>Setting</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/friends" activeClassName={s.active}>Friends</NavLink>
                {/*<Friends FriendsData ={state.friendsPage.FriendsData}/>*/}
            </div>
        </nav>
    )
}

export default Navbar;