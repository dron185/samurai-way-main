import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem";
import {Message} from "./Message";

type DialogItemType = {
    id: string
    name: string
}
type messageType = {
    id: string
    message: string
}
type dialogsDataType =  DialogItemType[]
type messagesDataType = messageType[]

export const Dialogs = () => {

    let dialogs: dialogsDataType = [
        {id: '1', name: 'Andrew'},
        {id: '2', name: 'Dimych'},
        {id: '3', name: 'Sveta'},
        {id: '4', name: 'Sasha'},
        {id: '5', name: 'Victor'},
        {id: '6', name: 'Valera'}
    ]

    let messages: messagesDataType = [
        {id: '1', message: 'Hi'},
        {id: '2', message: 'How is your it-kamasutra?'},
        {id: '3', message: 'Yo!'},
        {id: '4', message: 'Yo!'},
        {id: '5', message: 'Yo!'},
        {id: '5', message: 'YoYo!'},
    ]

    let dialogsElements = dialogs.map(el=> <DialogItem key={el.id} name={el.name} id={el.id}/>)
    let messagesElements = messages.map(el=> <Message key={el.id} message={el.message}/>)

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