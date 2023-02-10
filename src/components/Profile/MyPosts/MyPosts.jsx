import React from 'react';
import classMyPosts from './MyPosts.module.css';
import Post from './Post/Post';
import PostInput from './MyPostsInputForm';

const MyPosts = React.memo(props => {
    console.log('Render posts')
    let post = props.postsData.map((post, index) => <Post key={index} message={post.message}
        likeCounter={post.likeCounter} />);

    const getPostText = (formData) => {
        props.addPost(formData.postText)
    }

    return (
        <div>
            <div className={classMyPosts.postsBlock}>
                My posts
                <div>
                    <PostInput onSubmit={getPostText} />
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
});

export default MyPosts;