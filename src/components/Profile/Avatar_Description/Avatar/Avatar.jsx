import React, { useState } from 'react';
import classAvatar from './Avatar.module.css';
import backgroundIMG from '../../../../images/backgroundIMG.jpg';
import Status from './Status';

const Avatar = ({ avatar, status, fullName, aboutMe, putUserStatusOnServer, putUserNewPhotoThunk, isOwner }) => {
    let [isFocus, setIsFocus] = useState(false);
    const catchNewFile = (e) => {
        const newFile = e.target.files[0];
        e.target.files.length && putUserNewPhotoThunk(newFile);
    }

    return (
        <div className={classAvatar.wrapper}>

            <div className={classAvatar.imgBlock}>
                <img className={classAvatar.imgProfile}
                    src={backgroundIMG}
                    alt='' />
            </div>

            <div className={classAvatar.wrapperAva}>
                <div className={classAvatar.avatar}
                    onMouseOver={() => {
                        setIsFocus(isFocus = true)
                    }}
                    onMouseLeave={() => {
                        setIsFocus(isFocus = false)
                    }}>

                    <img src={avatar}
                        alt='' />
                    {isOwner && isFocus &&
                        <input type='file' onChange={catchNewFile} />}

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