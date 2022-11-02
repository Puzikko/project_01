let state = {
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
};

let rerenderEntireTree = (state) => {

}

export let addPost = () => {
    let newPost = {
        id: 1,
        message: state.profilePage.newPostText,
        likeCounter: 0
    };
    state.profilePage.postsData.push(newPost);
    rerenderEntireTree();
    updateNewPostText('');
};

export const updateNewPostText = (newChar) => {
  state.profilePage.newPostText = newChar;
  rerenderEntireTree();
};

export const sendMessage = () => {
    let newMessage = {
        id: 1,
        message: state.dialogsPage.newMessageText
    }
    state.dialogsPage.messagesData.push(newMessage);
    state.dialogsPage.newMessageText = '';
    rerenderEntireTree();
}

export const updateNewMessageText = (newChar) =>{
    debugger;
    state.dialogsPage.newMessageText = newChar;
    rerenderEntireTree()
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}

export default state;
