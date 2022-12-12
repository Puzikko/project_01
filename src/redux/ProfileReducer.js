const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_PROFILE_USER_DATA = 'SET-PROFILE-USER-DATA';

let initialState = {
    postsData: [
        { id: 1, message: 'Good job!', likeCounter: '5' },
        { id: 1, message: "wat's up, men?", likeCounter: '3' },
        { id: 1, message: "yo-yo-yo?", likeCounter: '1' }
    ],
    newPostText: '',
    profileUserData: null,
};

export const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 1,
                message: state.newPostText,
                likeCounter: 0
            };
            return {
                ...state,
                newPostText: '',
                postsData: [...state.postsData, newPost]
            };
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newChar
            };
        case SET_PROFILE_USER_DATA:
            return {
                ...state,
                profileUserData: action.profileUserData
            }
        default:
            return state;
    };
};

export const addPostActionCreator = () => {
    return { type: ADD_POST }
}
export const updateNewPostTextActionCeator = (newChar) => {
    return { type: UPDATE_NEW_POST_TEXT, newChar }
}
export const setProfileUserData = (profileUserData) => {
    return { type: SET_PROFILE_USER_DATA, profileUserData }
}