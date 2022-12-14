import React from 'react';
import { setProfileUserData } from '../../redux/ProfileReducer';
import AvatarDescription from "./Avatar_Description/AvatarDescription";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import { connect } from 'react-redux';
import axios from 'axios';
import { useParams } from 'react-router-dom';

class ProfileAPIContainer extends React.Component {

    componentDidMount() {
        debugger
        let userId = this.props.urlData;
        if (!userId) userId = '26943';
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                this.props.setProfileUserData(response.data);
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
    debugger
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