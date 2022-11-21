import { addPostActionCreator, updateNewPostTextActionCeator } from './../../../redux/ProfileReducer'
import MyPosts from "./MyPosts";
import { connect } from "react-redux";

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