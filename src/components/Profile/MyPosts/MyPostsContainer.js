import { addPost } from './../../../redux/ProfileReducer'
import MyPosts from "./MyPosts";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
    return { postsData: state.profilePage.postsData }
};

const MyPostsContainer = connect(mapStateToProps, { addPost })(MyPosts);


export default MyPostsContainer;