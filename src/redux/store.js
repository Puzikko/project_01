import { profileReducer } from "./ProfileReducer";
import { dialogReducer } from "./DialogReducer";

const store = {
    _state: {
        profilePage: {
            postsData: [
                { id: 1, message: 'Good job!', likeCounter: '5' },
                { id: 1, message: "wat's up, men?", likeCounter: '3' },
                { id: 1, message: "yo-yo-yo?", likeCounter: '1' }
            ],
            newPostText: 'Puziko',
        },

        dialogsPage: {
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
            newMessageText: ''
        }
    },
    _callSubscriber() {
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action);
        this._callSubscriber(this._state);
    }
}

export default store;
