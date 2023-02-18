import React from 'react';
import { NavLink } from 'react-router-dom';
import classContactsAndJob from './ContactsAndJob.module.css';

const ContactsAndJob = ({ contacts, lookingForAJob, lookingForAJobDescription }) => {

    return (
        <div className={classContactsAndJob.wrapper}>
            <div className={classContactsAndJob.contacts}>
                You can find me here
                <div>
                    <ul>
                        <li>
                            <NavLink to={contacts.facebook}>facebook</NavLink>
                        </li>
                        <li>
                            <NavLink to={contacts.website}>website</NavLink>
                        </li>
                        <li>
                            <NavLink to={contacts.vk}>vk</NavLink>
                        </li>
                        <li>
                            <NavLink to={contacts.twitter}>twitter</NavLink>
                        </li>
                        <li>
                            <NavLink to={contacts.instagram}>instagram</NavLink>
                        </li>
                        <li>
                            <NavLink to={contacts.youtube}>youtube</NavLink>
                        </li>
                        <li>
                            <NavLink to={contacts.github}>github</NavLink>
                        </li>
                        <li>
                            <NavLink to={contacts.mainLink}>mainLink</NavLink>
                        </li>
                    </ul>
                </div>
            </div>

            <div className={classContactsAndJob.lookingForJob}>
                Looking for a job:
                <div>
                    {lookingForAJob.toString()}
                </div>
                <div>
                    {lookingForAJobDescription}
                </div>
            </div>
        </div >
    )
}

export default ContactsAndJob;