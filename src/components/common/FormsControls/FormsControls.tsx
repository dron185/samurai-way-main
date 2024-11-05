import {WrappedFieldInputProps, WrappedFieldMetaProps} from "redux-form/lib/Field";
import {TextareaHTMLAttributes} from "react";
import styles from './FormsControls.module.css'

type Props = {
    input: WrappedFieldInputProps;
    meta: WrappedFieldMetaProps;
} & TextareaHTMLAttributes<HTMLTextAreaElement>


export const Textarea = ({input, meta, ...props}: Props) => {

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

