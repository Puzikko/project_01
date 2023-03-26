import React from 'react';
import classDialogs from './../Dialogs.module.css';
import MessageInput from './MessageInputForm';

const Message = ({ messagesData, sendMessage }) => {

    let message = messagesData.map((message, index) =>
        <div key={index}>
            <img alt=''></img>
            {message.message}
        </div>
    )

    const getMessage = (formData) => {
        sendMessage(formData.message)
    }

    return (
        <div className={classDialogs.userMessages}>
            {message}
            <div>
                <MessageInput onSubmit={getMessage} />
            </div>
        </div>
    )
}

export default Message;