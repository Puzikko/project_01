const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    dialogsData: [
        {id: 1, name: 'Serega'},
        {id: 2, name: 'Valenta'},
        {id: 3, name: 'Arsenchik'},
        {id: 4, name: 'Davy Johnes'},
        {id: 5, name: 'Sharky'}
    ],

    messagesData: [
        {id: 1, message: 'Wassssup men?'},
        {id: 1, message: 'How much is the fish?'},
        {id: 1, message: 'Check the microphone!'}
    ],
    newMessageText: ''
};

export const dialogReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                id: 1,
                message: state.newMessageText
            }
            state.messagesData.push(newMessage);
            state.newMessageText = '';
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newChar;
        default:
            return state;
    }
};

export const sendMessageActionCreator = () => {
    return { type: SEND_MESSAGE }
}
export const updateNewMessageTextActionCeator = (newChar) => {
    return {type: UPDATE_NEW_MESSAGE_TEXT, newChar}
}