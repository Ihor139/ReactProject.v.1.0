import React from 'react';
import {actionCreatorAddMessage, actionCreatorUpdateTextMessage} from "../../redux/dialogs_reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    // debugger;
    let state = props.store.getState();

    let addMessage = () => {
        let action = actionCreatorAddMessage();
        props.store.dispatch(action);
    };

    let messageUpdate = (text) => {
        let action = actionCreatorUpdateTextMessage(text);
        props.store.dispatch(action);
    }
    return (<Dialogs actionCreatorAddMessage={addMessage}
                     actionCreatorUpdateTextMessage={messageUpdate}
                     dialogsData = {state.MessagePage.DialogsData}
                     messageElement = {state.MessagePage.MessageData}
                     newTextMessage={ state.MessagePage.newTextMessage}
        />
    )
}

export default DialogsContainer;