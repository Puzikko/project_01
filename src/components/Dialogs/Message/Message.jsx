import React from 'react';
import classDialogs from './../Dialogs.module.css';

const Message = (props) => {

    let message = props.messagesData.map(message =>
        <div>
            <img></img>
            {message.message}
        </div>
    )

    const onChangeBody = (event) => {
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
                          onChange={onChangeBody}
                          value={props.newMessageText}
                />
                <div>
                    <button onClick={props.sendMessage}>Send message</button>
                </div>
            </div>
        </div>
    )
}

export default Message;