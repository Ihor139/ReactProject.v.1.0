import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Messages/Messages";
import {actionCreatorAddMessage, actionCreatorUpdateTextMessage} from "../../redux/state";

const Dialogs = (props) => {
    // debugger;
    let dialogElement = props.state.DialogsData.map(d => <DialogItem nameUser={d.nameUser} id={d.id}/>)
    let messageElement = props.state.MessageData.map(m => <Message message={m.message} id={m.id}/>)
    // let AvatarElement = props.MessageData.map(m => <Avatar message={m.avaicon} id={m.id}/>)

    let messageNewElement = React.createRef();

    let addMessage = () => {
        // let text = messageNewElement.current.value;
        let action = actionCreatorAddMessage();
        props.dispatch(action);
    };

    let messageUpdate = () => {
        // debugger;
        let text = messageNewElement.current.value;
        let action = actionCreatorUpdateTextMessage(text);
        props.dispatch(action);
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                {dialogElement}
            </div>
            <div className={s.messages}>
                {/*{AvatarElement}*/}
                {messageElement}
                <textarea onChange={messageUpdate}
                          ref={messageNewElement}
                          value={props.state.newTextMessage}/>
                <button onClick={addMessage}>Send message</button>
            </div>
        </div>
    )
}

export default Dialogs;