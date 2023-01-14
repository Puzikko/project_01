import React from "react";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, requiredField } from "../../../utils/validators/validators";
import { Textarea } from "../../common/FormsControls/FormsControl";

const maxLength10 = maxLengthCreator(10);

const PostInput = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder="Print your post." name='postText' component={Textarea}
                validate={[requiredField, maxLength10]} />
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