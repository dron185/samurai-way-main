import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

type DialogItemPropsType = {
    id: string
    name: string
}

export const DialogItem: React.FC<DialogItemPropsType> = (props) => {
    return (
        <div className={s.dialog}>
            <NavLink to={'/dialogs/' + props.id} activeClassName={s.active} className={s.link}>{props.name}</NavLink>
        </div>
    )
}