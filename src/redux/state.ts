export type MessageType = {
    id: string
    message: string
}
export type DialogType = {
    id: string
    name: string
}
export type PostType = {
    id: string
    message: string
    likesCount: number
}

type ProfilePageType = {
    posts: PostType[]
}
type DialogsPageType = {
    dialogs: DialogType[]
    messages: MessageType[]
}
// type SidebarType = {}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    // sidebar: SidebarType
}

export let state: RootStateType = {
    profilePage: {
        posts: [
            {id: '1', message: 'Hi, how are you?', likesCount: 12},
            {id: '2', message: "It's my first post", likesCount: 11},
            {id: '3', message: "BlaBla", likesCount: 7},
            {id: '4', message: "DaDa", likesCount: 5},
        ]
    },
    dialogsPage: {
        dialogs: [
            {id: '1', name: 'Andrew'},
            {id: '2', name: 'Dimych'},
            {id: '3', name: 'Sveta'},
            {id: '4', name: 'Sasha'},
            {id: '5', name: 'Victor'},
            {id: '6', name: 'Valera'}
        ],
        messages: [
            {id: '1', message: 'Hi'},
            {id: '2', message: 'How is your it-kamasutra?'},
            {id: '3', message: 'Yo!'},
            {id: '4', message: 'Yo!'},
            {id: '5', message: 'Yo!'},
            {id: '5', message: 'YoYo!'},
        ]
    },
    // sidebar: {}
}