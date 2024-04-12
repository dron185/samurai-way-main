import s from "./Message.module.css";
import React from "react";
import avatar from '../../../../assets/images/avatar1.png'

type MessagePropsType = {
    message: string
}
export const Message: React.FC<MessagePropsType> = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    // <div className={s.messageContainer}>
    // {/*<img className={s.avatar} src={avatar} alt="avatar"/>*/}
    //
    //     </div>
    )
}