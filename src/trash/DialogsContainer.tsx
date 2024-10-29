import React from 'react';
import {
    addMessageAC,
    changeNewMessageAC,
    DialogType,
    MessageType,
    newMessageTextType
} from "../redux/dialogs-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../redux/redux-store";
import {Dialogs} from "../layout/main/dialogs/Dialogs";


export const _DialogsContainer: React.FC/*<DialogsPropsType>*/ = () => {

    const dialogs = useSelector<AppStateType, DialogType[]>(state => state.dialogsPage.dialogs);
    const messages = useSelector<AppStateType, MessageType[]>(state => state.dialogsPage.messages)
    const newMessageText = useSelector<AppStateType, newMessageTextType>(state => state.dialogsPage.newMessageText)
    const isAuth = useSelector<AppStateType, boolean>(state => state.auth.isAuth)

    const dispatch = useDispatch();


    const onSendMessageClick = (text: newMessageTextType) => {
        dispatch(addMessageAC(text));
    }

    const onNewMessageChange = (value: string) => {
        dispatch(changeNewMessageAC(value));
    }

    return <Dialogs
        dialogs={dialogs}
        messages={messages}
        newMessageText={newMessageText}
        addMessage={onSendMessageClick}
        newMessageChange={onNewMessageChange}
        isAuth={isAuth}
    />
};