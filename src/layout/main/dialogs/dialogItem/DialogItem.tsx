import s from "./DialogItem.module.css";
import {NavLink} from "react-router-dom";
import React from "react";
import avatar from '../../../../assets/images/avatar1.png'

type DialogItemPropsType = {
    id: string
    name: string
}

export const DialogItem: React.FC<DialogItemPropsType> = (props) => {
    return (
        <div className={s.dialog}>
            <img className={s.avatar} src={avatar} alt="avatar"/>
            <NavLink to={'/dialogs/' + props.id} activeClassName={s.active} className={s.link}>{props.name}</NavLink>
        </div>
    )
}