let _callSubscriber;
/*let _callSubscriber = (state) => {
    debugger;
}*/

const store = {
    _state: {
        profilePage: {
            postsData: [
                {id: 1, message: 'Good job!', likeCounter: '5'},
                {id: 1, message: "wat's up, men?", likeCounter: '3'},
                {id: 1, message: "yo-yo-yo?", likeCounter: '1'}
            ],
            newPostText: 'Puziko',
        },

        dialogsPage: {
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
            newMessageText: 'Hi!!'
        }
    },
    getState() {
        return this._state;
    },
    addPost() {
        let newPost = {
            id: 1,
            message: this._state.profilePage.newPostText,
            likeCounter: 0
        };
        this._state.profilePage.postsData.push(newPost);
        _callSubscriber();
        this.updateNewPostText('');
    },
    updateNewPostText(newChar) {
        this._state.profilePage.newPostText = newChar;
        _callSubscriber();
    },
    sendMessage() {
        let newMessage = {
            id: 1,
            message: this._state.dialogsPage.newMessageText
        }
        this._state.dialogsPage.messagesData.push(newMessage);
        this._state.dialogsPage.newMessageText = '';
        _callSubscriber();
    },
    updateNewMessageText(newChar) {
        this._state.dialogsPage.newMessageText = newChar;
        _callSubscriber();
    },
    subscribe(observer) {
        _callSubscriber = observer;
    },
}

export default store;
