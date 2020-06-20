import React from 'react';
import {actionCreatorAddMessage, actionCreatorUpdateTextMessage} from "../../redux/dialogs_reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

// Redux

// const DialogsContainer = (props) => {

//     let state = props.store.getState();
//
//     let addMessage = () => {
//         let action = actionCreatorAddMessage();
//         props.store.dispatch(action);
//     };
//
//     let messageUpdate = (text) => {
//         let action = actionCreatorUpdateTextMessage(text);
//         props.store.dispatch(action);
//     }
//     return (
//         <Dialogs actionCreatorAddMessage={addMessage}
//                  actionCreatorUpdateTextMessage={messageUpdate}
//                  dialogsData={state.MessagePage.DialogsData}
//                  messageElement={state.MessagePage.MessageData}
//                  newTextMessage={state.MessagePage.newTextMessage}
//         />
//     )
// }

// React-Redux library

let mapStateToProps = (state) => {
    return {
        messagePage: state.MessagePage,
        newTextMessage: state.MessagePage.newTextMessage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        actionCreatorAddMessage: () => {
            dispatch(actionCreatorAddMessage());
        },
        actionCreatorUpdateTextMessage:(newTextMessage) =>{
            dispatch(actionCreatorUpdateTextMessage(newTextMessage));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Dialogs);
