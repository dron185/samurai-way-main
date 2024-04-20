import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./dialogItem/DialogItem";
import {Message} from "./message/Message";
import {DialogType, MessageType} from "../../../redux/state";
import avatar from "../../../assets/images/avatar1.png";

type DialogsPropsType = {
    dialogs: DialogType[]
    messages: MessageType[]
    addMessage: (messageText: string) => void
    changeNewMessageCallback: (newText: string) => void
    newMessageText: string
}

export const Dialogs: React.FC<DialogsPropsType> = (props) => {

    let dialogsElements = props.dialogs.map(el => <DialogItem key={el.id} name={el.name} id={el.id}/>)
    let messagesElements = props.messages.map(el =><div className={s.messageWrapper}><img className={s.avatar} src={avatar} alt="avatar"/><Message
        key={el.id} message={el.message}/></div>)


    const addMessage = () => {
       props.addMessage(props.newMessageText);
    }

    const newMessageChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.changeNewMessageCallback(e.currentTarget.value);
    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div>
                    <div>
                        <textarea
                            onChange={newMessageChangeHandler}
                            value={props.newMessageText}
                        />
                    </div>
                    <div>
                        <button onClick={addMessage}>Add message</button>
                    </div>
                    {/*<button>Remove</button>*/}
                </div>
            </div>
        </div>
    );
};