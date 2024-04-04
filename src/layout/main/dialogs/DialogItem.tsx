import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

type DialogItemPropsType = {
    id: string
    name: string
}

export const DialogItem = ({id, name}: DialogItemPropsType) => {
    return (
        <div className={s.dialog}>
            <NavLink to={'/dialogs/' + id} activeClassName={s.active} className={s.link}>{name}</NavLink>
        </div>
    )
}