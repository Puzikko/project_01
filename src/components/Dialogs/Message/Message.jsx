import React from 'react';
import classDialogs from './../Dialogs.module.css';


const Message = (props) => {

    let message = props.arrayOfMessages.map(message => 
        <div> {message.message} </div>)

    return (
        <div className={classDialogs.userMessages}>
            { message }
        </div>
    )
}

export default Message