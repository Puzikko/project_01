import {rerenderEntireTree} from "../rerender";

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
        }
};

export let addPost = () => {
    let newPost = {
        id: 1,
        message: state.profilePage.newPostText,
        likeCounter: 0
    };
    state.profilePage.postsData.push(newPost);
    rerenderEntireTree(state);
    updateNewPostText('');
};

export const updateNewPostText = (newChar) => {
  state.profilePage.newPostText = newChar;
  rerenderEntireTree(state);
};

export default state;