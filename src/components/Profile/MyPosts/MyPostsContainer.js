import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCeator } from './../../../redux/ProfileReducer'
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";
import { connect } from "react-redux";

// const MyPostsContainer = (props) => {

//     return (
//         <StoreContext.Consumer>{
//             (store) => {
//                 const addPost = () => {
//                     store.dispatch(addPostActionCreator());
//                 };

//                 const updateNewPostText = (newChar) => {
//                     store.dispatch(updateNewPostTextActionCeator(newChar));
//                 };
//                 return <MyPosts updateNewPostText={updateNewPostText}
//                     addPost={addPost}
//                     profilePage={store.getState().profilePage} />
//             }}
//         </StoreContext.Consumer>)

const mapStateToProps = (state) => {
    return { profilePage: state.profilePage }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addPost() { dispatch(addPostActionCreator()) },
        updateNewPostText(newChar) { dispatch(updateNewPostTextActionCeator(newChar)) }
    }
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);


export default MyPostsContainer;