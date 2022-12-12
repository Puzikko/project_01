import React from 'react';
import { setProfileUserData } from '../../redux/ProfileReducer';
import AvatarDescription from "./Avatar_Description/AvatarDescription";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import { connect } from 'react-redux';
import axios from 'axios';

class ProfileAPIContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
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

const mapStateToProps = (state) => {
    return {
        profileData: state.profilePage.profileUserData,
    }
}

const Profile = connect(mapStateToProps, { setProfileUserData })(ProfileAPIContainer);
export default Profile;