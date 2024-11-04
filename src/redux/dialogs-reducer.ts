export type DialogsActionsType = ReturnType<typeof addMessageAC>

export type DialogType = {
    id: number
    name: string
}

export type MessageType = {
    id: number
    message: string
}

export type DialogsPageType = {
    dialogs: DialogType[]
    messages: MessageType[]
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
    ]
}

export const dialogsReducer = (state: DialogsPageType = initialDialogsState, action: DialogsActionsType): DialogsPageType => {

    switch (action.type) {
        case 'ADD-MESSAGE':
            const newMessage: MessageType = {
                id: new Date().getTime(),
                message: action.messageText,
            };
            return {
                ...state,
                messages: [...state.messages, newMessage]
            }
        default:
            return state;
    }
}

export const addMessageAC = (messageText: string) => {
    return {
        type: 'ADD-MESSAGE',
        messageText: messageText,
    } as const
}


