import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Messages/Messages";

const Dialogs = (props) => {
    // debugger;
    let dialogElement = props.messagePage.DialogsData.map(d => <DialogItem nameUser={d.nameUser} id={d.id} key={d.id}/>)
    let messageElement = props.messagePage.MessageData.map(m => <Message message={m.message} id={m.id} key={m.id}/>)

    let messageNewElement = React.createRef();

    let addMessage = () => {
        props.actionCreatorAddMessage();
    };

    let messageUpdate = () => {
        let text = messageNewElement.current.value;
        props.actionCreatorUpdateTextMessage(text);
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


                          value={props.newTextMessage }/>



                <button onClick={addMessage}>Send message</button>
            </div>
        </div>
    )
}

export default Dialogs;