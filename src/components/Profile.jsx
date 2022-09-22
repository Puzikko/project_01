import React from 'react';
import classProfile from '../modules/Profile.module.css';

const Profile = () => {
  return (
    <div className={classProfile.content}>
      <div><img src='https://nosomosnonos.com/wp-content/uploads/2021/11/WOW-Warcraft-World-of-Warcraft-1.jpg' /></div>
      <div>
        ava + description
      </div>
      <div>
        My post
        <div>
          New post
        </div>
      </div>
      <div className={classProfile.post}>
        <div>
          post 1
        </div>
        <div>
          post 2
        </div>
      </div>
    </div>
  )
}

export default Profile;