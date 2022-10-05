import React from 'react';
import classMyPosts from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

    let postsData = [
        {id: 1, message: 'Good job!', likeCounter: '5'},
        {id: 1, message: "wat's up, men?", likeCounter: '3'},
        {id: 1, message: "yo-yo-yo?", likeCounter: '1'}
    ]

    let post = postsData.map(post => <Post message={post.message} likeCounter={post.likeCounter}/>)

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