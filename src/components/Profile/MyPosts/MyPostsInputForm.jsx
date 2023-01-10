import React from "react";
import { Field, reduxForm } from "redux-form";

const PostInput = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder="Print your post." name='postText' component='textarea' />
        </div>
        <div>
            <button>Add post</button>
        </div>
    </form>
}

const PostInputForm = reduxForm({
    //a unique name for the form
    form: 'postInput'
})(PostInput)

export default PostInputForm