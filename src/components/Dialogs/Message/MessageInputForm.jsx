import React from "react";
import { Field, reduxForm } from "redux-form";
import { Textarea } from './../../common/FormsControls/FormsControl';
import { maxLengthCreator, requiredField } from './../../../utils/validators/validators';

const MessageInput = ({ handleSubmit }) => {
    const maxLength = maxLengthCreator(200);
    return <form onSubmit={handleSubmit}>
        <div>
            <Field placeholder="Print your message." name='message'
                component={Textarea} validate={[requiredField, maxLength]} />
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