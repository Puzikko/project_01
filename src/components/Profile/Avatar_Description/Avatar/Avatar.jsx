import React from 'react';
import classAvatar from './Avatar.module.css';

const Avatar = (props) => {

    return (
        <div className={classAvatar.wrapper}>

            <div className={classAvatar.imgBlock}>
                <img className={classAvatar.imgProfile} src='https://img-fotki.yandex.ru/get/6604/64843573.14d/0_90959_f2a0118d_orig.jpg' />
            </div>

            <div className={classAvatar.wrapperAva} style={{ backgroundColor: 'white' }}>
                <div className={classAvatar.avatar}>
                    <img src={props.avatar} />
                </div>

                <div className={classAvatar.fullName}>
                    <div>{props.fullName}</div>

                    <div>{props.aboutMe}</div>
                </div>

            </div>

        </div >
    )
}

export default Avatar;