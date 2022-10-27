import React from 'react';
import classDialogs from './../Dialogs.module.css';


const Message = (props) => {

    let message = props.messagesData.map(message => 
        <div>
            <img></img>
            {message.message}
        </div>
    )

    let sendMessage = React.createRef();
    const fnSendMessage = () => {
        let text = sendMessage.current.value;
        alert (text)
    }

    return (
        <div className={classDialogs.userMessages}>
            <div>
                { message }
            </div>
            <div>
                <textarea ref={sendMessage}></textarea>
                <div>
                    <button onClick={ fnSendMessage }>Send message</button>
                </div>
            </div>
        </div>
    )
}

export default Message