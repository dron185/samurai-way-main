import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./dialogItem/DialogItem";
import {Message} from "./message/Message";
import {ActionsType, DialogType, MessageType} from "../../../redux/state";
import avatar from "../../../assets/images/avatar1.png";
import {addMessageAC, changeNewMessageAC} from "../../../redux/dialogs-reducer";

type DialogsPropsType = {
    dialogs: DialogType[]
    messages: MessageType[]
    dispatch: (action: ActionsType) => void
    newMessageText: string
}

export const Dialogs: React.FC<DialogsPropsType> = (props) => {

    let dialogsElements = props.dialogs.map(el => <DialogItem key={el.id} name={el.name} id={el.id}/>)
    let messagesElements = props.messages.map(el =><div className={s.messageWrapper}><img className={s.avatar} src={avatar} alt="avatar"/><Message
        key={el.id} message={el.message}/></div>)


    const addMessageHandler = () => {
        props.dispatch(addMessageAC(props.newMessageText));
    }

    const newMessageChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(changeNewMessageAC(e.currentTarget.value));
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
                            value={props.newMessageText}
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