import React from "react";
import { Field, reduxForm } from "redux-form";
import { Textarea } from './../../common/FormsControls/FormsControl';
import { maxLengthCreator, requiredField } from './../../../utils/validators/validators';

const MessageInput = (props) => {
    const maxLength50 = maxLengthCreator(50);
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder="Print your message." name='message'
                component={Textarea} validate={[requiredField, maxLength50]} />
        </div>
        <div>
            <button>Send message</button>
        </div>
    </form>
}

const MessageInputForm = reduxForm({
    //a unique name for the form
    form: 'messageInput'
})(MessageInput)

export default MessageInputForm