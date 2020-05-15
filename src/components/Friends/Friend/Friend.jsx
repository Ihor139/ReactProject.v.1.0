import React from 'react';
import s from './Friend.module.css';
import {NavLink} from "react-router-dom";

const Friend = (props) => {

    return (
        <div className={s.friend}>
            <NavLink to={"/account/" + props.id}> { <img src={props.img}/>}</NavLink>
            <NavLink to={"/account/" + props.id}> {props.name}</NavLink>
        </div>
    )
}

export default Friend;