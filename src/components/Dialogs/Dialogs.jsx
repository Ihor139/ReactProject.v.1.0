import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Messages/Messages";

const Dialogs = (props) => {

    let DialogsData = [
        {nameUser: 'Ihor', id: '1'},
        {nameUser: 'Vallya', id: '2'},
        {nameUser: 'Vasya', id: '3'},
        {nameUser: 'Petya', id: '4'},
        {nameUser: 'Roma', id: '5'},
        {nameUser: 'Vova', id: '6'},
    ]
    let MessageData = [
        {message: 'Message 1', id: '1'},
        {message: 'Message 2', id: '2'},
        {message: 'Message 3', id: '3'},
        {message: 'Message 4', id: '4'},
        {message: 'Message 5', id: '5'},
        {message: 'Message 6', id: '6'},
    ]

    let dialogElement = DialogsData.map(d => <DialogItem nameUser={d.nameUser} id={d.id}/>)
    let messageElement = MessageData.map(m => <Message message={m.message} id={m.id}/>)


    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                {dialogElement}
            </div>
            <div className={s.messages}>
                {messageElement}            </div>
        </div>
    )
}

export default Dialogs;