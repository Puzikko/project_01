import React from 'react';
import classAvatarDescription from './AvatarDescription.module.css';

const AvatarDescription = (props) => {
    return (
        <div>
            <div>
                <div className={classAvatarDescription.imgBlock}>
                    <img src='https://img-fotki.yandex.ru/get/6604/64843573.14d/0_90959_f2a0118d_orig.jpg' />
                </div>
                <div className={classAvatarDescription.avaDescription}>
                    ava + description
                </div>
            </div>
        </div>
    )
}

export default AvatarDescription;