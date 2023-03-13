import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import Avatar from './Avatar/Avatar';
import ContactsAndJob from './Description/ContactsAndJob';

const AvatarDescription = ({ profileData, status, putUserStatusOnServer, putUserNewPhotoThunk, isOwner }) => {

    if (!profileData) return <Preloader />
    return (
        <div>
            <Avatar avatar={profileData.photos.large}
                fullName={profileData.fullName}
                aboutMe={profileData.aboutMe}
                status={status}
                isOwner={isOwner}
                putUserStatusOnServer={putUserStatusOnServer}
                putUserNewPhotoThunk={putUserNewPhotoThunk}
            />
            <ContactsAndJob contacts={profileData.contacts}
                lookingForAJob={profileData.lookingForAJob}
                lookingForAJobDescription={profileData.lookingForAJobDescription} />
        </div>
    )
}

export default AvatarDescription;