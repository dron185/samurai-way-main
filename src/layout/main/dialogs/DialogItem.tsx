import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

type DialogItemPropsType = {
    id: string
    name: string
}

export const DialogItem = ({id, name}: DialogItemPropsType) => {
    return (
        <div className={s.dialog + ' ' + s.active}><NavLink to={'/dialogs/' + id}>{name}</NavLink></div>
    )
}