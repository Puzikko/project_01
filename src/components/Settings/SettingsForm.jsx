import React from 'react';
import { reduxForm } from 'redux-form';
import { createField, Input, Textarea } from '../common/FormsControls/FormsControl';
import styles from '../common/FormsControls/FormsControl.module.css'

const SettingsForm = ({ handleSubmit, profileUserData, error }) => {
    return <form onSubmit={handleSubmit}>
        <div>
            <button>Save</button>
        </div>
        {/* выкидываем error отдельными строками, при условии если сайты не валидны */}
        {error && error.map(errorMessage => <div key={errorMessage} className={styles.formSummaryError}>
            {errorMessage}
        </div>)}
        <div>
            <b>Looking for a job</b>
            {createField('lookingForAJob', Input, { type: 'checkbox' })}
            <div>
                {createField('lookingForAJobDescription', Textarea, { placeholder: 'About my skills' })}
            </div>
        </div>
        <b>Full name</b>{createField('fullName', Input, { placeholder: 'Full name' })}
        <b>aboutMe</b>{createField('aboutMe', Input, { placeholder: 'About me' })}
        <div>
            <b>Contacts:</b>
        </div>
        {profileUserData &&
            Object.keys(profileUserData.contacts).map(key => { //мапим вложенный объект contacts
                return (
                    <div key={key}>
                        <>{key}</>{createField('contacts.' + key, Input, { placeholder: `https://${key}.com` })}
                    </div>
                )
            })}
    </form >;
};

//В reduxForm происходит настройка формы и передаётся компонент. Т.о. образуется контейнерная компонента. 
const SettingsReduxForm = reduxForm({
    //a unique name for the form
    form: 'settings',
    enableReinitialize: true,
})(SettingsForm);

export default SettingsReduxForm;