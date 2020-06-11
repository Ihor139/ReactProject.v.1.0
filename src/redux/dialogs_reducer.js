const actionTypeAddMessage = 'ADD-MESSAGE';
const actionTypeUpdateTextMessage = 'UPDATE-TEXT-MESSAGE';

let initDialogs = {
    DialogsData:
        [
            {nameUser: 'Ihor', id: '1'},
            {nameUser: 'Vallya', id: '2'},
            {nameUser: 'Vasya', id: '3'},
            {nameUser: 'Petya', id: '4'},
            {nameUser: 'Roma', id: '5'},
            {nameUser: 'Vova', id: '6'},
        ],

    MessageData:
        [
            {message: 'Message 1', id: '1'},
            {message: 'Message 2', id: '2'},
            {message: 'Message 3', id: '3'},
            {message: 'Message 4', id: '4'},
            {message: 'Message 5', id: '5'},
            {message: 'Message 6', id: '6'},
        ],
    newTextMessage: '',
};

let dialogsReducer = (state = initDialogs, action) => {
    // debugger;
    // let stateCopy;
    switch (action.type) {
        case actionTypeAddMessage: {
            // let newElement = {
            //     message: state.newTextMessage,
            //     id: 8,
            // };
            // let newTextMessage = state.newTextMessage
            // stateCopy = {
            // stateCopy.DialogsData = [...state.DialogsData];
            // stateCopy.MessageData.push(newElement);
            // stateCopy.newTextMessage = '';
            // return stateCopy;
            // debugger;
             return {
                ...state,
                MessageData: [...state.MessageData,
                             {id: 8, message: state.newTextMessage},
                ],
                 newTextMessage: '',
            };

        }
        case actionTypeUpdateTextMessage: {
            return {
                ...state,
                newTextMessage: action.newText,
            };
        }
        default:
            return state;
    }
};

export const actionCreatorAddMessage = () => {
    return {
        type: actionTypeAddMessage,
    }
};

export const actionCreatorUpdateTextMessage = (text) => {
    return {
        type: actionTypeUpdateTextMessage,
        newText: text,
    }
};

export default dialogsReducer;