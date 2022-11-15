import React from 'react';
import classDialogs from './../Dialogs.module.css';

const Message = (props) => {

    let message = props.messagesData.map(message =>
        <div>
            <img></img>
            {message.message}
        </div>
    )

    const onSendMessage = () => {
        props.sendMessage();
    }

    const onChangeMessage = (event) => {
        let newChar = event.target.value;
        props.onChangeMessage(newChar);
    }

    return (
        <div className={classDialogs.userMessages}>
            <div>
                {message}
            </div>
            <div>
                <textarea placeholder={'Print your message.'}
                          onChange={onChangeMessage}
                          value={props.newMessageText}
                />
                <div>
                    <button onClick={onSendMessage}>Send message</button>
                </div>
            </div>
        </div>
    )
}

export default Message;