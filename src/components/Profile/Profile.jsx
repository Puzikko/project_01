import React from 'react';
import classProfile from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import AvatarDescription from "./Avatar_Description/AvatarDescription";

const Profile = (props) => {
  
  let postsData = [
    {id: 1, message: 'Good job!', likeCounter: '5'},
    {id: 1, message: "wat's up, men?", likeCounter: '3'},
    {id: 1, message: "yo-yo-yo?", likeCounter: '1'}
]

  return (
    <div>
      <AvatarDescription />
      <MyPosts arrayOfPosts={postsData}/>
    </div>
  )
}

export default Profile;