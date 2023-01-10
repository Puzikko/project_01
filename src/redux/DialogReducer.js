const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogsData: [
        { id: 1, name: 'Serega' },
        { id: 2, name: 'Valenta' },
        { id: 3, name: 'Arsenchik' },
        { id: 4, name: 'Davy Johnes' },
        { id: 5, name: 'Sharky' }
    ],

    messagesData: [
        { id: 1, message: 'Wassssup men?' },
        { id: 1, message: 'How much is the fish?' },
        { id: 1, message: 'Check the microphone!' }
    ],
};

export const dialogReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                id: 1,
                message: action.message
            };
            return {
                ...state,
                newMessageText: '',
                messagesData: [...state.messagesData, newMessage]
            };
        default:
            return state;
    }
};

export const sendMessage = (message) => {
    return { type: SEND_MESSAGE, message }
}