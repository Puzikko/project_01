import { addPost } from './../../../redux/ProfileReducer'
import MyPosts from "./MyPosts";
import { connect } from "react-redux";
import { getPostsData } from '../../../redux/ProfileSelector';

const mapStateToProps = (state) => {
    return { postsData: getPostsData(state) }
};

const MyPostsContainer = connect(mapStateToProps, { addPost })(MyPosts);


export default MyPostsContainer;