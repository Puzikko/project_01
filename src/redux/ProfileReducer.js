const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    postsData: [
        { id: 1, message: 'Good job!', likeCounter: '5' },
        { id: 1, message: "wat's up, men?", likeCounter: '3' },
        { id: 1, message: "yo-yo-yo?", likeCounter: '1' }
    ],
    newPostText: '',
};

export const profileReducer = (state = initialState, action) => {
    let stateCopy;
    switch (action.type) {
        case ADD_POST:
            stateCopy = JSON.parse(JSON.stringify(state));
            let newPost = {
                id: 1,
                message: stateCopy.newPostText,
                likeCounter: 0
            };
            stateCopy.postsData = [...state.postsData]
            stateCopy.postsData.push(newPost);
            stateCopy.newPostText = '';
            return stateCopy;
        case UPDATE_NEW_POST_TEXT:
            stateCopy = { ...state };
            stateCopy.newPostText = action.newChar;
            return stateCopy;
        default:
            return state;
    };
};

export const addPostActionCreator = () => {
    //debugger;
    return { type: ADD_POST }
}
export const updateNewPostTextActionCeator = (newChar) => {
    return { type: UPDATE_NEW_POST_TEXT, newChar }
}