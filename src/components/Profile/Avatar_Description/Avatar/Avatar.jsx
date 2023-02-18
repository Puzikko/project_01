import React from 'react';
import classAvatar from './Avatar.module.css';
import backgroundIMG from '../../../../images/backgroundIMG.jpg';
import Status from './Status';

const Avatar = ({ avatar, status, fullName, aboutMe, putUserStatusOnServer }) => {
    return (
        <div className={classAvatar.wrapper}>

            <div className={classAvatar.imgBlock}>
                <img className={classAvatar.imgProfile}
                    src={backgroundIMG}
                    alt='' />
            </div>

            <div className={classAvatar.wrapperAva}>
                <div className={classAvatar.avatar}>
                    <img src={avatar} alt='' />
                </div>

                <div className={classAvatar.fullName}>
                    <h2>{fullName}</h2>

                    <Status status={status}
                        putUserStatusOnServer={putUserStatusOnServer} />

                    <p>About me: {aboutMe}</p>
                </div>

            </div>

        </div >
    )
}

export default Avatar;