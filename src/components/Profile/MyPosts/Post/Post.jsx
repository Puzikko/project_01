import React from 'react';
import classPost from './Post.module.css';

const Post = (props) => {
  return (
    <div className={classPost.post}>
      <div className={classPost.block}>
        <div className={classPost.avamessage}>
          <img src='https://images.unsplash.com/photo-1595433707802-6b2626ef1c91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80' />
          <h6>{props.message}</h6>
        </div>

        <div>
          <span className={classPost.like}>
            {`${props.likeCounter} like`}
          </span>
        </div>
      </div>
    </div>
  )
}

export default Post;