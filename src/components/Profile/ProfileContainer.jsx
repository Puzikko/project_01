import React from 'react';
import { getUserProfileThunk } from '../../redux/ProfileReducer';
import AvatarDescription from "./Avatar_Description/AvatarDescription";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import { connect } from 'react-redux';
import { useParams, Navigate } from 'react-router-dom';
class ProfileAPIContainer extends React.Component {

    componentDidMount() {
        this.props.getUserProfileThunk(this.props.urlData)
    }

    render() {
        if (!this.props.isAuth) return <Navigate replace to='/login' />
        return (
            <div>
                <AvatarDescription profileData={this.props.profileData} />
                <MyPostsContainer />
            </div>
        );
    };
}


const UrlDataComponent = (props) => {

    const urlData = useParams();
    return <ProfileAPIContainer {...props} urlData={urlData.userId} />;
}


const mapStateToProps = (state) => {
    return {
        profileData: state.profilePage.profileUserData,
        isAuth: state.auth.isAuth,
    }
}

const Profile = connect(mapStateToProps, { getUserProfileThunk })(UrlDataComponent);
export default Profile;