import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./dialogItem/DialogItem";
import {Message} from "./message/Message";
import avatar from "../../../assets/images/avatar1.png";
import {NewDialogsPropsType} from "./DialogsContainer";
import {AddMessageFormRedux} from "./AddMessageForm/AddMessageForm";

export type FormDataDialogsType = { newMessageBody: string }

export const Dialogs: React.FC<NewDialogsPropsType> = (props) => {

    let dialogsElements = props.dialogs.map(el => <DialogItem key={el.id} name={el.name} id={el.id}/>)
    let messagesElements = props.messages.map(el =>
        <div className={s.messageWrapper} key={el.id}>
            <img className={s.avatar} src={avatar} alt="avatar"/>
            <Message message={el.message}/>
        </div>
    )

    const addNewMessage = (formData: FormDataDialogsType) => {
        props.addMessage(formData.newMessageBody)
    }

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