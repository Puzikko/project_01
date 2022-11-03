let rerenderEntireTree;
/*let rerenderEntireTree = (state) => {
    debugger;
}*/

const store = {
    state: {
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
    addPost() {
        let newPost = {
            id: 1,
            message: store.state.profilePage.newPostText,
            likeCounter: 0
        };
        store.state.profilePage.postsData.push(newPost);
        rerenderEntireTree();
        store.updateNewPostText('');
    },
    updateNewPostText(newChar) {
        store.state.profilePage.newPostText = newChar;
        rerenderEntireTree();
    },
    sendMessage() {
        let newMessage = {
            id: 1,
            message: store.state.dialogsPage.newMessageText
        }
        store.state.dialogsPage.messagesData.push(newMessage);
        store.state.dialogsPage.newMessageText = '';
        rerenderEntireTree();
    },
    updateNewMessageText(newChar) {
        store.state.dialogsPage.newMessageText = newChar;
        rerenderEntireTree();
    },
    subscribe(observer) {
        rerenderEntireTree = observer;
    },
}

export default store;
