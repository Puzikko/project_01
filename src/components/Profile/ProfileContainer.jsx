import React from 'react';
import { setProfileUserData } from '../../redux/ProfileReducer';
import AvatarDescription from "./Avatar_Description/AvatarDescription";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { profileAPI } from '../../api/api';

class ProfileAPIContainer extends React.Component {

    componentDidMount() {

        let userId = this.props.urlData;
        if (!userId) userId = '26943';
        profileAPI.getUserProfile(userId)
            .then(data => {
                debugger
                this.props.setProfileUserData(data);
            })
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


const UrlDataComponent = (props) => {

    const urlData = useParams();
    return <ProfileAPIContainer {...props} urlData={urlData.userId} />;
}


const mapStateToProps = (state) => {
    return {
        profileData: state.profilePage.profileUserData,
    }
}

const Profile = connect(mapStateToProps, { setProfileUserData })(UrlDataComponent);
export default Profile;