import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./dialogItem/DialogItem";
import {Message} from "./message/Message";
import avatar from "../../../assets/images/avatar1.png";
import {NewDialogsPropsType} from "./NewDialogsContainer";

export const Dialogs: React.FC<NewDialogsPropsType> = (props) => {

    let dialogsElements = props.dialogs.map(el => <DialogItem key={el.id} name={el.name} id={el.id}/>)
    let messagesElements = props.messages.map(el =>
        <div className={s.messageWrapper} key={el.id}>
            <img className={s.avatar} src={avatar} alt="avatar"/>
            <Message message={el.message}/>
        </div>
    )

    const onSendMessageClick = () => {
        props.addMessage(props.newMessageText)
    }

    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.newMessageChange(e.currentTarget.value)
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
                            onChange={onNewMessageChange}
                            value={props.newMessageText}
                        />
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Add message</button>
                    </div>
                    {/*<button>Remove</button>*/}
                </div>
            </div>
        </div>
    );
};

