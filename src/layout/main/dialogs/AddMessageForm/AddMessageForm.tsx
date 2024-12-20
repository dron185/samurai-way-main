import {maxLengthCreator, required} from "../../../../utils/validators/validators";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Textarea} from "../../../../components/common/FormsControls/FormsControls";
import React from "react";
import {FormDataType} from "../Dialogs";

const maxLength50 =  maxLengthCreator(50);

export const AddMessageForm = (props: InjectedFormProps<FormDataType>) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    component={Textarea}
                    validate={[required, maxLength50]}
                    name="newMessageBody"
                    placeholder="Enter your message"
                />
            </div>
            <div>
                <button>Add message</button>
            </div>
        </form>
    )
}

export const AddMessageFormRedux = reduxForm<FormDataType>({form: "dialogAddMessageForm"})(AddMessageForm)