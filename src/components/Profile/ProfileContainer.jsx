import React from 'react';
import { getUserProfileThunk, getUserStatusThunk, putUserStatusThunk, putUserNewPhotoThunk } from '../../redux/ProfileReducer';
import AvatarDescription from "./Avatar_Description/AvatarDescription";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { WithAuthRedirect } from '../../hoc/withAuthRedirect';
import { getProfileData, getStatus } from '../../redux/ProfileSelector';
import { getIsAuth, getUserId } from '../../redux/AuthSelector';

class ProfileAPIContainer extends React.Component {

    componentDidMount() {
        this.props.getUserProfileThunk(this.props.urlData)
        this.props.getUserStatusThunk(this.props.urlData)
    }

    componentDidUpdate(prevProps) {
        if (this.props.urlData !== prevProps.urlData) {
            this.props.getUserProfileThunk(this.props.urlData)
            this.props.getUserStatusThunk(this.props.urlData)
        }
    }



    render() {
        return (
            <div>
                <AvatarDescription profileData={this.props.profileData}
                    status={this.props.status}
                    putUserStatusOnServer={this.props.putUserStatusThunk}
                    putUserNewPhotoThunk={this.props.putUserNewPhotoThunk}
                    isOwner={this.props.userId === +this.props.urlData}
                />
                <MyPostsContainer />
            </div>
        );
    };
}

const mapStateToProps = (state) => {
    return {
        profileData: getProfileData(state),
        status: getStatus(state),
        userId: getUserId(state),
        isAuth: getIsAuth(state),
    }
}

const UrlDataComponent = (props) => {
    const urlData = useParams();
    return <ProfileAPIContainer {...props} urlData={urlData.userId} />;
}

const WithRedirectProfilePage = WithAuthRedirect(UrlDataComponent); // Компонент с подтверждённой(/нет) аутентификацией

const Profile = connect(mapStateToProps, { getUserProfileThunk, getUserStatusThunk, putUserStatusThunk, putUserNewPhotoThunk })
    (WithRedirectProfilePage);
export default Profile;