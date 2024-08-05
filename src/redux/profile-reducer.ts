export type PostType = {
    id: number
    message: string
    likesCount: number
}

export type newPostTextType = string

export type ProfilePageType = {
    posts: PostType[]
    newPostText: newPostTextType
    profile: any
}

// Actions Types:
export type addPostActionType = {
    type: typeof ADD_POST
    postText: string
}
export type changeNewTextActionType = {
    type: typeof CHANGE_NEW_TEXT
    newText: string
}
export type setUserProfileActionType = {
    type: typeof SET_USER_PROFILE
    profile: any
}

export type ActionsType =
    | addPostActionType
    | changeNewTextActionType
    | setUserProfileActionType

const ADD_POST = 'ADD-POST';
const CHANGE_NEW_TEXT = 'CHANGE-NEW-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';


let initialProfileState: ProfilePageType = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: "It's my first post", likesCount: 11},
        {id: 3, message: "BlaBla", likesCount: 7},
        {id: 4, message: "DaDa", likesCount: 5},
    ],
    newPostText: "",
    profile: null
}

const profileReducer = (state: ProfilePageType = initialProfileState, action: ActionsType): ProfilePageType => {

    switch (action.type) {
        case ADD_POST:
            const newPost: PostType = {
                id: new Date().getTime(),
                message: action.postText,
                likesCount: 0,
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        case CHANGE_NEW_TEXT:
            return {
                ...state,
                newPostText: action.newText,
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile,
            }
        default:
            return state;
    }
}

export const addPostAC = (postText: string): addPostActionType => ({type: ADD_POST, postText: postText})

export const changeNewTextAC = (newText: string): changeNewTextActionType => {
    return {
        type: CHANGE_NEW_TEXT,
        newText: newText,
    } as const
}

export const setUserProfile = (profile: any): setUserProfileActionType => (
    {type: SET_USER_PROFILE, profile}
)

export default profileReducer;

