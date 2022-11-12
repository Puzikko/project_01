const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

export const profileReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 1,
                message: state.newPostText,
                likeCounter: 0
            };
            state.postsData.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newChar;
            return state;
        default:
            return state;
    };
};

export const addPostActionCreator = () => {
    return { type: ADD_POST }
}
export const updateNewPostTextActionCeator = (newChar) => {
    return {type: UPDATE_NEW_POST_TEXT, newChar}
}