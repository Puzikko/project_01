import React from 'react';
import { getUserProfileThunk, getUserStatusThunk, putUserStatusThunk } from '../../redux/ProfileReducer';
import AvatarDescription from "./Avatar_Description/AvatarDescription";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { WithAuthRedirect } from '../../hoc/withAuthRedirect';
class ProfileAPIContainer extends React.Component {

    componentDidMount() {
        this.props.getUserProfileThunk(this.props.urlData)
        this.props.getUserStatusThunk(this.props.urlData)
    }

    render() {
        return (
            <div>
                <AvatarDescription profileData={this.props.profileData}
                    status={this.props.status}
                    putUserStatusOnServer={this.props.putUserStatusThunk}
                />
                <MyPostsContainer />
            </div>
        );
    };
}

const mapStateToProps = (state) => {
    return {
        profileData: state.profilePage.profileUserData,
        status: state.profilePage.status,
        userId: state.auth.id,
        isAuth: state.auth.isAuth,
    }
}

const UrlDataComponent = (props) => {
    const urlData = useParams();
    return <ProfileAPIContainer {...props} urlData={urlData.userId} />;
}

const WithRedirectProfilePage = WithAuthRedirect(UrlDataComponent); // Компонент с подтверждённой(/нет) аутентификацией

const Profile = connect(mapStateToProps, { getUserProfileThunk, getUserStatusThunk, putUserStatusThunk })
    (WithRedirectProfilePage);
export default Profile;