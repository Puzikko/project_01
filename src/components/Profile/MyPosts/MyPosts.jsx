import React from 'react';
import classMyPosts from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  
    let post = props.postsData.map(post => <Post message={post.message} likeCounter={post.likeCounter}/>);
    let newPostElement = React.createRef();
    const addPost = () => {
        let text = newPostElement.current.value;
        alert (text);
    }

    return (
        <div>
            <div className={classMyPosts.postsBlock}>
                My posts
                <div>
                    <textarea ref={ newPostElement }></textarea>
                    <div>
                        <button onClick={ addPost }>Add post</button>
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