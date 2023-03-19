import React from "react"
import styles from "./FormsControl.module.css"
import { Field } from "redux-form";

const FormControl = ({ meta: { touched, error }, children }) => {
    const hasError = touched && error;
    return <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
        {children}
        {hasError && <div><span>{error}</span></div>}
    </div>
};

export const Textarea = (props) => {
    // console.log({ input, props })
    const { input, meta, child, ...restProps } = props;
    return <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>
};

export const Input = (props) => {
    // console.log({ input, props })
    const { input, meta, child, ...restProps } = props;
    return <FormControl {...props}><input {...input} {...restProps} /></FormControl>
};

export const createField = (name, component, props, text) => {
    // const { name, component, text } = props;
    return <div>
        <Field name={name} component={component} {...props} /> {text}
    </div>
};