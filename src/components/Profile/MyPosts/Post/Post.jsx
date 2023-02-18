import React from 'react';
import avatar from './../../../../images/ava.png'
import classPost from './Post.module.css';

const Post = ({ message, likeCounter }) => {
  return (
    <div className={classPost.post}>
      <div className={classPost.block}>
        <div className={classPost.avamessage}>
          <img src={avatar} alt='' />
          <h3>{message}</h3>
        </div>

        <div>
          <span className={classPost.like}>
            {`${likeCounter} like`}
          </span>
        </div>
      </div>
    </div>
  )
}

export default Post;