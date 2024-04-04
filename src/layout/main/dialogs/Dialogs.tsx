import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem";

type MessagePropsType = {
    message: string
}

type DialogItemPropsType = {
    id: string
    name: string
}

// type dialogsDataPropsType = {
//     DialogItemPropsType[]
// }

const Message = (props: MessagePropsType) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

export const Dialogs = () => {

    let dialogsData: DialogItemPropsType[] = [
        {id: '1', name: 'Andrew'},
        {id: '2', name: 'Dimych'},
        {id: '3', name: 'Sveta'},
        {id: '4', name: 'Sasha'},
        {id: '5', name: 'Victor'},
        {id: '6', name: 'Valera'}
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {/*<DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>*/}

                {dialogsData.map(el=>
                    <DialogItem name={el.name} id={el.id}/>
                )}

                {/*<DialogItem name={'Andrew'} id={'1'}/>*/}
                {/*<DialogItem name={'Dimych'} id={'2'}/>*/}
                {/*<DialogItem name={'Sveta'} id={'3'}/>*/}
                {/*<DialogItem name={'Sasha'} id={'4'}/>*/}
                {/*<DialogItem name={'Victor'} id={'5'}/>*/}
                {/*<DialogItem name={'Valera'} id={'6'}/>*/}
            </div>
            <div className={s.messages}>
                <Message message={'Hi!'}/>
                <Message message={'How is your it-kamasutra?'}/>
                <Message message={'Yo!'}/>
            </div>
        </div>
    );
};