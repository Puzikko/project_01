import React from 'react';
//import classProfile from './Profile.module.css';
import AvatarDescription from "./Avatar_Description/AvatarDescription";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {

    return (
        <div>
            <AvatarDescription />
            <MyPostsContainer /*profilePage={props.profilePage}
                              dispatch={props.dispatch}*/
            />
        </div>
    )
}

export default Profile;