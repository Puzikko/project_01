import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCeator} from './../../../redux/ProfileReducer'
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {

    const addPost = () => {
        props.dispatch(addPostActionCreator());
    };

    let updateNewPostText = (newChar) => {
        props.dispatch(updateNewPostTextActionCeator(newChar));
    };

    return <MyPosts updateNewPostText={updateNewPostText}
                    addPost={addPost}
                    profilePage={props.profilePage}/>
}

export default MyPostsContainer;