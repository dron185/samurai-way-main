export type MessageType = {
    id: number
    message: string
}
export type DialogType = {
    id: number
    name: string
}
export type PostType = {
    id: number
    message: string
    likesCount: number
}

export type ProfilePageType = {
    posts: PostType[]
    newPostText: string
}
type DialogsPageType = {
    dialogs: DialogType[]
    messages: MessageType[]
    newMessageText: string
}
type SidebarType = {
    friends: DialogType[]
}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
}


/*let rerenderEntireTree = (state: RootStateType) => {
    console.log("state is changed")
}

export let state: RootStateType = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 12},
            {id: 2, message: "It's my first post", likesCount: 11},
            {id: 3, message: "BlaBla", likesCount: 7},
            {id: 4, message: "DaDa", likesCount: 5},
        ],
        newPostText: "",
    },
    dialogsPage: {
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
    },
    sidebar: {
        friends: [
            {id: 1, name: 'Andrew'},
            {id: 2, name: 'Sasha'},
            {id: 3, name: 'Sveta'},
        ]
    }
}*/

/*export const addPost = (postText: string) => {
    const newPost: PostType = {
        // id: new Date().getTime(),
        id: 5,
        message: postText,
        likesCount: 0,
    };

    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}*/

/*export const changeNewText = (newText: string) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}*/

/*export const addMessage = (messageText: string) => {
    const newMessage: MessageType = {
        id: 7,
        message: messageText,
    };

    state.dialogsPage.messages.push(newMessage);
    state.dialogsPage.newMessageText = '';
    rerenderEntireTree(state);
}*/

/*export const changeNewMessage = (newText: string) => {
    state.dialogsPage.newMessageText = newText;
    rerenderEntireTree(state);
}*/

/*
export const subscribe = (observer: any) => {
    rerenderEntireTree = observer;
}*/


export type StoreType = {
    _state: RootStateType
    changeNewText: (newText: string) => void
    addPost: (postText: string) => void
    addMessage: (messageText: string) => void
    changeNewMessage: (newText: string) => void
    _callSubscriber: (_state: RootStateType) => void
    subscribe: (callback: (_state: RootStateType) => void) => void
    getState: () => RootStateType
    dispatch: (action: ActionsType) => void
}

type AddPostActionType = {
    type: 'ADD-POST',
    postText: string
}

type ChangeNewTextActionType = {
    type: 'CHANGE-NEW-TEXT',
    newText: string
}

type AddMessageActionType = {
    type: 'ADD-MESSAGE',
    messageText: string
}

type ChangeNewMessageActionType = {
    type: 'CHANGE-NEW-MESSAGE',
    newText: string
}

export type ActionsType = AddPostActionType | ChangeNewTextActionType | AddMessageActionType | ChangeNewMessageActionType

const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 12},
                {id: 2, message: "It's my first post", likesCount: 11},
                {id: 3, message: "BlaBla", likesCount: 7},
                {id: 4, message: "DaDa", likesCount: 5},
            ],
            newPostText: "",
        },
        dialogsPage: {
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
        },
        sidebar: {
            friends: [
                {id: 1, name: 'Andrew'},
                {id: 2, name: 'Sasha'},
                {id: 3, name: 'Sveta'},
            ]
        }
    },
    _callSubscriber (_state: RootStateType) {
        console.log("state is changed")
    },

    getState () {
        return this._state;
    },
    subscribe (callback) {
        this._callSubscriber = callback;
    },

    addPost (postText: string) {
        const newPost: PostType = {
            id: new Date().getTime(),
            // id: 5,
            message: postText,
            likesCount: 0,
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    changeNewText (newText: string) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    addMessage(messageText: string) {
        const newMessage: MessageType = {
            id: 7,
            message: messageText,
        };
        this._state.dialogsPage.messages.push(newMessage);
        this._state.dialogsPage.newMessageText = '';
        this._callSubscriber(this._state);
    },
    changeNewMessage (newText: string) {
        this._state.dialogsPage.newMessageText = newText;
        this._callSubscriber(this._state);
    },

    dispatch (action) {
        if (action.type === 'ADD-POST') {
            const newPost: PostType = {
                id: new Date().getTime(),
                // id: 5,
                message: action.postText,
                likesCount: 0,
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'CHANGE-NEW-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === 'ADD-MESSAGE') {
            const newMessage: MessageType = {
                id: new Date().getTime(),
                message: action.messageText,
            };
            this._state.dialogsPage.messages.push(newMessage);
            this._state.dialogsPage.newMessageText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'CHANGE-NEW-MESSAGE') {
            this._state.dialogsPage.newMessageText = action.newText;
            this._callSubscriber(this._state);
        }
    }
}

export default store;
