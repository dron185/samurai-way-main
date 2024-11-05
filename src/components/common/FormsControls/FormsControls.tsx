import {WrappedFieldProps} from "redux-form/lib/Field";
import s from './FormsControls.module.css'

type FormControlProps = WrappedFieldProps & {
    tagName: 'textarea' | 'input'
}

export const FormControl = ({input, meta, tagName, ...props}: FormControlProps) => {
    const hasError = meta.touched && meta.error;
    const Tag = tagName;

    return (
        <div className={`${s.formControl} ${hasError ? s.error : ""}`}>
            <div>
                <Tag {...input} {...props} />
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const Textarea = (props: WrappedFieldProps) => {
    return <FormControl tagName='textarea' {...props}/>
}

export const Input = (props: WrappedFieldProps) => {
    return <FormControl tagName='input' {...props}/>
}