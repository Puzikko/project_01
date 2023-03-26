import React from 'react';
import { NavLink } from 'react-router-dom';
import classContactsAndJob from './ContactsAndJob.module.css';

const ContactsAndJob = ({ contacts, lookingForAJob, lookingForAJobDescription }) => {
    return (
        <div className={classContactsAndJob.wrapper}>
            <div className={classContactsAndJob.contacts}>
                <b>You can find me here</b>
                <div>
                    <ul>
                        {Object.keys(contacts).map(key => <ContactInfo key={key} contactKey={key} contactValue={contacts[key]} />)}
                    </ul>
                </div>
            </div>

            <div className={classContactsAndJob.lookingForAJob}>
                <b>Looking for a job:</b> {lookingForAJob ? lookingForAJobDescription : 'No'}
            </div>
        </div >
    )
}

const ContactInfo = ({ contactKey, contactValue }) => {
    return (<li>
        <NavLink to={contactValue}>{contactKey}</NavLink>
    </li>)
}

export default ContactsAndJob;