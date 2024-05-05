import {ActionsType, DialogsPageType, MessageType} from "./store";

let initialDialogsState: DialogsPageType = {
    dialogs: [
        {id: 1, name: 'Andrew'},
        {id: 2, name: 'Dimych'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Victor'},
        {id: 6, name: 'Valera'}
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your it-kamasutra?'},
        {id: 3, message: 'Yo!'},
        {id: 4, message: 'Yo!'},
        {id: 5, message: 'Yo!'},
        {id: 6, message: 'YoYo!'},
    ],
    newMessageText: "",
}

const dialogsReducer = (state = initialDialogsState, action: ActionsType) => {

    switch (action.type) {
        case 'CHANGE-NEW-MESSAGE':
            state.newMessageText = action.newText;
            return state;
        case 'ADD-MESSAGE':
            const newMessage: MessageType = {
                id: new Date().getTime(),
                message: action.messageText,
            };
            state.messages.push(newMessage);
            state.newMessageText = '';
            return state;
        default:
            return state;
    }
}

export const changeNewMessageAC = (newText: string) => {
    return {
        type: 'CHANGE-NEW-MESSAGE',
        newText: newText,
    } as const
}

export const addMessageAC = (messageText: string) => {
    return {
        type: 'ADD-MESSAGE',
        messageText: messageText,
    } as const
}

export default dialogsReducer;
