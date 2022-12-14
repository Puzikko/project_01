import React from 'react';
import Preloader from '../../Preloader/Preloader';
import Avatar from './Avatar/Avatar';
import classAvatarDescription from './AvatarDescription.module.css';
import ContactsAndJob from './Description/ContactsAndJob';

const AvatarDescription = (props) => {

    if (!props.profileData) return <Preloader />
    return (
        <div>
            <Avatar avatar={props.profileData.photos.large}
                fullName={props.profileData.fullName}
                aboutMe={props.profileData.aboutMe} />
            <ContactsAndJob contacts={props.profileData.contacts}
                lookingForAJob={props.profileData.lookingForAJob}
                lookingForAJobDescription={props.profileData.lookingForAJobDescription} />
        </div>
    )
}

export default AvatarDescription;