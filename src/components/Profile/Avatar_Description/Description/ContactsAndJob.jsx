import React from 'react';
import { NavLink } from 'react-router-dom';
import classContactsAndJob from './ContactsAndJob.module.css';

const ContactsAndJob = (props) => {

    return (
        <div className={classContactsAndJob.wrapper}>
            <div className={classContactsAndJob.contacts}>
                You can find me here
                <div>
                    <ul>
                        <li>
                            <NavLink to={props.contacts.facebook}>facebook</NavLink>
                        </li>
                        <li>
                            <NavLink to={props.contacts.website}>website</NavLink>
                        </li>
                        <li>
                            <NavLink to={props.contacts.vk}>vk</NavLink>
                        </li>
                        <li>
                            <NavLink to={props.contacts.twitter}>twitter</NavLink>
                        </li>
                        <li>
                            <NavLink to={props.contacts.instagram}>instagram</NavLink>
                        </li>
                        <li>
                            <NavLink to={props.contacts.youtube}>youtube</NavLink>
                        </li>
                        <li>
                            <NavLink to={props.contacts.github}>github</NavLink>
                        </li>
                        <li>
                            <NavLink to={props.contacts.mainLink}>mainLink</NavLink>
                        </li>
                    </ul>
                </div>
            </div>

            <div className={classContactsAndJob.lookingForJob}>
                Looking for a job:
                <div>
                    {props.lookingForAJob.toString()}
                </div>
                <div>
                    {props.lookingForAJobDescription}
                </div>
            </div>
        </div >
    )
}

export default ContactsAndJob;