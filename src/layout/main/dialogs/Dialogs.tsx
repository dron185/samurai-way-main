import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./dialogItem/DialogItem";
import {Message} from "./message/Message";
import avatar from "../../../assets/images/avatar1.png";
import {SuperDialogsPropsType} from "./NewDialogsContainer";

// type DialogsPropsType = {
//     dialogs: DialogType[]
//     messages: MessageType[]
//     newMessageText: newMessageTextType
//     addMessage: (text: newMessageTextType) => void
//     newMessageChange: (value: string) => void
// }

export const Dialogs: React.FC<SuperDialogsPropsType> = (props) => {

    let dialogsElements = props.dialogs.map(el => <DialogItem key={el.id} name={el.name} id={el.id}/>)
    let messagesElements = props.messages.map(el => <div className={s.messageWrapper}><img className={s.avatar}
                                                                                           src={avatar}
                                                                                           alt="avatar"/><Message
        key={el.id} message={el.message}/></div>)


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

