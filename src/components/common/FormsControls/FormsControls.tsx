import {WrappedFieldInputProps, WrappedFieldMetaProps} from "redux-form/lib/Field";
import {InputHTMLAttributes, TextareaHTMLAttributes} from "react";
import styles from './FormsControls.module.css'

type WrappedFieldProps = {
    input: WrappedFieldInputProps
    meta: WrappedFieldMetaProps
}

type TextareaProps = WrappedFieldProps & TextareaHTMLAttributes<HTMLTextAreaElement>
type InputProps = WrappedFieldProps & InputHTMLAttributes<HTMLInputElement>

export const Textarea = ({input, meta, ...props}: TextareaProps) => {

    const hasError = meta.touched && meta.error;
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error: "")}>
            <div>
                <textarea {...input} {...props} />
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}



export const Input = ({input, meta, ...props}: InputProps) => {

    const hasError = meta.touched && meta.error;
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error: "")}>
            <div>
                <input {...input} {...props} />
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}