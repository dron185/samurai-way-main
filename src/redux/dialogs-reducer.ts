import {ActionsType, DialogsPageType, MessageType} from "./state";

const dialogsReducer = (state: DialogsPageType, action: ActionsType) => {

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
