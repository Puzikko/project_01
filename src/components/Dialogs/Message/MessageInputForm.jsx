import React from "react";
import { Field, reduxForm } from "redux-form";

const MessageInput = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder="Print your message." name='message' component='textarea' />
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