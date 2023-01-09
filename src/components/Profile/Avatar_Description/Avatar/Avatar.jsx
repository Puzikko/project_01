import React from 'react';
import classAvatar from './Avatar.module.css';
import backgroundIMG from '../../../../images/backgroundIMG.jpg';
import Status from './Status';

const Avatar = (props) => {
    debugger
    return (
        <div className={classAvatar.wrapper}>

            <div className={classAvatar.imgBlock}>
                <img className={classAvatar.imgProfile} src={backgroundIMG} />
            </div>

            <div className={classAvatar.wrapperAva}>
                <div className={classAvatar.avatar}>
                    <img src={props.avatar} />
                </div>

                <div className={classAvatar.fullName}>
                    <h2>{props.fullName}</h2>

                    <Status status={props.status}
                        putUserStatusOnServer={props.putUserStatusOnServer} />

                    <p>About me: {props.aboutMe}</p>
                </div>

            </div>

        </div >
    )
}

export default Avatar;