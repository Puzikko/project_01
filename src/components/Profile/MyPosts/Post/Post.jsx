import React from 'react';
import classPost from './Post.module.css';

const Post = (props) => {
  return (
    <div className={classPost.post}>
      <img src='https://images.unsplash.com/photo-1595433707802-6b2626ef1c91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80' />
      {props.message}
      <div>
        <span className={classPost.like}>{`${props.likeCounter} like`}</span>
      </div>
    </div>
  )
}

export default Post;