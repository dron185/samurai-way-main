export type ActionsType =
    | ReturnType<typeof changeNewMessageAC>
    | ReturnType<typeof addMessageAC>

export type DialogType = {
    id: number
    name: string
}

export type MessageType = {
    id: number
    message: string
}

export type newMessageTextType = string

export type DialogsPageType = {
    dialogs: DialogType[]
    messages: MessageType[]
    newMessageText: newMessageTextType
}

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

const dialogsReducer = (state: DialogsPageType = initialDialogsState, action: ActionsType): DialogsPageType => {

    switch (action.type) {
        case 'CHANGE-NEW-MESSAGE':
            return {
                ...state,
                newMessageText: action.newText
            }
        case 'ADD-MESSAGE':
            const newMessage: MessageType = {
                id: new Date().getTime(),
                message: action.messageText,
            };
            return {
                ...state,
                messages: [...state.messages, newMessage],
                newMessageText: ""
            }
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


