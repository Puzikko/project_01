import React from 'react';
import classProfile from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import AvatarDescription from "./Avatar_Description/AvatarDescription";

const Profile = (props) => {
  return (
    <div>
      <AvatarDescription />
      <MyPosts />
    </div>
  )
}

export default Profile;