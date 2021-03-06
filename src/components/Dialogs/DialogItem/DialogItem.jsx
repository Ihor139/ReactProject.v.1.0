import React from 'react';
import s from './DialogItem.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={"/messages/" + props.id}> {props.nameUser}</NavLink>
        </div>
    )
}

export default DialogItem;