import React from 'react';
import classMyPosts from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostActionCreator, updateNewPostTextActionCeator} from './../../../redux/ProfileReducer'

const MyPosts = (props) => {
  
    let post = props.postsData.map(post => <Post message={post.message}
                                                 likeCounter={post.likeCounter}/>);

    let newPostElement = React.createRef()

    const addPost = () => {
        props.dispatch(addPostActionCreator());
    };

    let onPostChange = () => {
        let newChar = newPostElement.current.value;
        props.dispatch(updateNewPostTextActionCeator(newChar));
    };

    return (
        <div>
            <div className={classMyPosts.postsBlock}>
                My posts
                <div>
                    <textarea onChange={ onPostChange }
                              ref={ newPostElement }
                              value={ props.newPostText }/>
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