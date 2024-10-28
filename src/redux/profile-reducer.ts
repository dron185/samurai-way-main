import {AppDispatch} from "./redux-store";
import {usersAPI} from "../api/api";

export type PostType = {
    id: number
    message: string
    likesCount: number
}

export type newPostTextType = string

export type ProfilePageType = {
    posts: PostType[]
    newPostText: newPostTextType
    profile: ProfileType | null
}

type ProfileContactsType = {
    facebook: string
    website: string
    vk: string
    twitter: string
    instagram: string
    youtube: null | string
    github: string
    mainLink: null | string
}

type ProfilePhotosType = {
    small: string
    large: string
}

export type ProfileType = {
    aboutMe: string
    contacts: ProfileContactsType
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: ProfilePhotosType
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
    profile: /*ProfileType | null*/any
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
    // profile: {
    //     "aboutMe": "я круто чувак 1001%",
    //     "contacts": {
    //         "facebook": "facebook.com",
    //         "website": '',
    //         "vk": "vk.com",
    //         "twitter": "https://twitter.com",
    //         "instagram": "instagram.com",
    //         "youtube": null,
    //         "github": "github.com",
    //         "mainLink": null
    //     },
    //     "lookingForAJob": true,
    //     "lookingForAJobDescription": "не ищу, а дурачусь",
    //     "fullName": "samurai dimych",
    //     "userId": 2,
    //     "photos": {
    //         "small": "https://social-network.samuraijs.com/activecontent/images/users/2/user-small.jpg?v=0",
    //         "large": "https://social-network.samuraijs.com/activecontent/images/users/2/user.jpg?v=0"
    //     }
    // }
    profile: null
}

export const profileReducer = (state: ProfilePageType = initialProfileState, action: ActionsType): ProfilePageType => {

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

const setUserProfileAC = (profile: ProfileType): setUserProfileActionType => (
    {type: SET_USER_PROFILE, profile}
)

// thunks

export const getUserProfileTC = (userId: string) => (dispatch: AppDispatch) => {
    usersAPI.getProfile(userId).then(response => {
        dispatch(setUserProfileAC(response.data));
    });
}