import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./dialogItem/DialogItem";
import {Message} from "./message/Message";
import {DialogType, MessageType} from "../../../redux/state";

type DialogsPropsType = {
    dialogs: DialogType[]
    messages: MessageType[]
}

export const Dialogs: React.FC<DialogsPropsType> = (props) => {

    let dialogsElements = props.dialogs.map(el=> <DialogItem key={el.id} name={el.name} id={el.id}/>)
    let messagesElements = props.messages.map(el=> <Message key={el.id} message={el.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    );
};