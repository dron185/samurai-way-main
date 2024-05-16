import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./dialogItem/DialogItem";
import {Message} from "./message/Message";
import avatar from "../../../assets/images/avatar1.png";
import {
    addMessageAC,
    changeNewMessageAC,
    DialogType,
    MessageType,
    newMessageTextType
} from "../../../redux/dialogs-reducer";
import {useDispatch, useSelector} from "react-redux";
import {ReducersStateType} from "../../../redux/redux-store";


export const Dialogs: React.FC/*<DialogsPropsType>*/ = () => {
    const dialogs = useSelector<ReducersStateType, DialogType[]>(state => state.dialogsPage.dialogs);
    const messages = useSelector<ReducersStateType, MessageType[]>(state => state.dialogsPage.messages)
    const newMessageText = useSelector<ReducersStateType, newMessageTextType>(state => state.dialogsPage.newMessageText)

    const dispatch = useDispatch();

    let dialogsElements = dialogs.map(el => <DialogItem key={el.id} name={el.name} id={el.id}/>)
    let messagesElements = messages.map(el =><div className={s.messageWrapper}><img className={s.avatar} src={avatar} alt="avatar"/><Message
        key={el.id} message={el.message}/></div>)


    const addMessageHandler = () => {
        dispatch(addMessageAC(newMessageText));
    }

    const newMessageChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(changeNewMessageAC(e.currentTarget.value));
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div>
                        <textarea
                            placeholder={"Enter your message"}
                            onChange={newMessageChangeHandler}
                            value={newMessageText}
                        />
                    </div>
                    <div>
                        <button onClick={addMessageHandler}>Add message</button>
                    </div>
                    {/*<button>Remove</button>*/}
                </div>
            </div>
        </div>
    );
};