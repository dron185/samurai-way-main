import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import {type} from "node:os";

type DialogItemPropsType = {
    name: string
    id: string
}

const DialogItem = (props: DialogItemPropsType) => {
    return (
        <div className={s.dialog + ' ' + s.active}><NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink></div>
    )
}

type MessagePropsType = {
    message: string
}

const Message = (props: MessagePropsType) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

export const Dialogs = () => {

    let dialogsData = [
        {id: 1, name: 'Andrew'},
        {id: 2, name: 'Dimych'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Victor'},
        {id: 6, name: 'Valera'}
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {/*<DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>*/}
                <DialogItem name={'Andrew'} id={'1'}/>
                <DialogItem name={'Dimych'} id={'2'}/>
                <DialogItem name={'Sveta'} id={'3'}/>
                <DialogItem name={'Sasha'} id={'4'}/>
                <DialogItem name={'Victor'} id={'5'}/>
                <DialogItem name={'Valera'} id={'6'}/>
            </div>
            <div className={s.messages}>
                <Message message={'Hi!'}/>
                <Message message={'How is your it-kamasutra?'}/>
                <Message message={'Yo!'}/>
            </div>
        </div>
    );
};