import React from 'react';
import { getUserProfileThunk } from '../../redux/ProfileReducer';
import AvatarDescription from "./Avatar_Description/AvatarDescription";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { WithAuthRedirect } from '../../hoc/withAuthRedirect';
class ProfileAPIContainer extends React.Component {

    componentDidMount() {
        this.props.getUserProfileThunk(this.props.urlData)
    }

    render() {
        return (
            <div>
                <AvatarDescription profileData={this.props.profileData} />
                <MyPostsContainer />
            </div>
        );
    };
}

const mapStateToProps = (state) => {
    return {
        profileData: state.profilePage.profileUserData,
    }
}

const UrlDataComponent = (props) => {

    const urlData = useParams();
    return <ProfileAPIContainer {...props} urlData={urlData.userId} />;
}

const WithRedirectProfilePage = WithAuthRedirect(UrlDataComponent);

const Profile = connect(mapStateToProps, { getUserProfileThunk })(WithRedirectProfilePage);
export default Profile;