import React from 'react';
import classMyPosts from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  
    let post = props.arrayOfPosts.map(post => <Post message={post.message} likeCounter={post.likeCounter}/>)

    return (
        <div>
            <div className={classMyPosts.postsBlock}>
                My posts
                <div>
                    <textarea></textarea>
                    <div>
                        <button>Add post</button>
                    </div>
                </div>
                <div>
                    New post
                </div>
            </div>
            <div className={classMyPosts.posts}>
                { post }
            </div>
        </div>
    )
}

export default MyPosts;