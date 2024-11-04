import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./dialogItem/DialogItem";
import {Message} from "./message/Message";
import avatar from "../../../assets/images/avatar1.png";
import {NewDialogsPropsType} from "./DialogsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

type FormDataType = { newMessageBody: string }

export const Dialogs: React.FC<NewDialogsPropsType> = (props) => {

    let dialogsElements = props.dialogs.map(el => <DialogItem key={el.id} name={el.name} id={el.id}/>)
    let messagesElements = props.messages.map(el =>
        <div className={s.messageWrapper} key={el.id}>
            <img className={s.avatar} src={avatar} alt="avatar"/>
            <Message message={el.message}/>
        </div>
    )


    const addNewMessage = (formData: FormDataType) => {
        props.addMessage(formData.newMessageBody)
    }

    // if (!props.isAuth) return <Redirect to="/login"/>

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
    );
};

const AddMessageForm = (props: InjectedFormProps<FormDataType>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    component="textarea"
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

const AddMessageFormRedux = reduxForm<FormDataType>({form: "dialogAddMessageForm"})(AddMessageForm)