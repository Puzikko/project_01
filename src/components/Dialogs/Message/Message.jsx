import React from 'react';
import classDialogs from './../Dialogs.module.css';
import MessageInput from './MessageInputForm';

const Message = (props) => {

    let message = props.messagesData.map((message, index) =>
        <div key={index}>
            <img></img>
            {message.message}
        </div>
    )

    const getMessage = (formData) => {
        props.sendMessage(formData.message)
    }

    return (
        <div className={classDialogs.userMessages}>
            <div>
                {message}
            </div>
            <div>
                <MessageInput onSubmit={getMessage} />
            </div>
        </div>
    )
}

export default Message;