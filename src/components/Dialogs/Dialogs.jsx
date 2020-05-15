import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Messages/Messages";

const Dialogs = (props) => {
    // debugger;
    let dialogElement = props.DialogsData.map(d => <DialogItem nameUser={d.nameUser} id={d.id}/>)
    let messageElement = props.MessageData.map(m => <Message message={m.message} id={m.id}/>)
    // let AvatarElement = props.MessageData.map(m => <Avatar message={m.avaicon} id={m.id}/>)

    let messageNewElement = React.createRef();

    let addMessage = () => {
        let text = messageNewElement.current.value;
        props.addMessage(text)
    };

    let messageUpdate = () => {
        let text = messageNewElement.current.value;
        props.updateTextMessage(text);
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
                          value={props.newTextMessage}/>
                <button onClick={addMessage}>Add message</button>
            </div>
        </div>
    )
}

export default Dialogs;