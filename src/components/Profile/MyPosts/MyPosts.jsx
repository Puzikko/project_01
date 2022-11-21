import React from 'react';
import classMyPosts from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    let post = props.profilePage.postsData.map(post => <Post message={post.message}
        likeCounter={post.likeCounter} />);

    let onPostChange = (event) => {
        let newChar = event.target.value;
        props.updateNewPostText(newChar);
    };

    return (
        <div>
            <div className={classMyPosts.postsBlock}>
                My posts
                <div>
                    <textarea placeholder={'Print you post.'}
                        onChange={onPostChange}
                        value={props.profilePage.newPostText} />
                    <div>
                        <button onClick={props.addPost}>Add post</button>
                    </div>
                </div>
                <div>
                    New post
                </div>
            </div>
            <div className={classMyPosts.posts}>
                {post}
            </div>
        </div>
    )
}

export default MyPosts;