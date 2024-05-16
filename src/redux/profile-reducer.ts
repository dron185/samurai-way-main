export type PostType = {
    id: number
    message: string
    likesCount: number
}

export type newPostTextType = string

export type ProfilePageType = {
    posts: PostType[]
    newPostText: newPostTextType
}

export type ActionsType =
    | ReturnType<typeof addPostAC>
    | ReturnType<typeof changeNewTextAC>

let initialProfileState: ProfilePageType = {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 12},
            {id: 2, message: "It's my first post", likesCount: 11},
            {id: 3, message: "BlaBla", likesCount: 7},
            {id: 4, message: "DaDa", likesCount: 5},
        ],
        newPostText: "",
    }

const profileReducer = (state = initialProfileState, action: ActionsType) => {

    switch (action.type) {
        case 'ADD-POST':
            const newPost: PostType = {
                id: new Date().getTime(),
                message: action.postText,
                likesCount: 0,
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case 'CHANGE-NEW-TEXT':
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}

export const addPostAC = (postText: string) => ({type: 'ADD-POST', postText: postText} as const)

export const changeNewTextAC = (newText: string) => {
    return {
        type: 'CHANGE-NEW-TEXT',
        newText: newText,
    } as const
}

export default profileReducer;

