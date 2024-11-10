import {AppDispatch} from "./redux-store";
import {profileAPI} from "../api/api";

export type PostType = {
    id: number
    message: string
    likesCount: number
}

export type ProfilePageType = {
    posts: PostType[]
    profile: ProfileType | null
    status: string
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

export type setUserProfileActionType = {
    type: typeof SET_USER_PROFILE
    profile: ProfileType | null
}

export type setUserStatusActionType = {
    type: typeof SET_STATUS,
    status: string
}

export type deletePostActionType = ReturnType<typeof deletePostAC>

export type ActionsType =
    | addPostActionType
    | setUserProfileActionType
    | setUserStatusActionType
    | deletePostActionType

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';
const DELETE_POST = 'DELETE-POST';


let initialProfileState: ProfilePageType = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: "It's my first post", likesCount: 11},
        {id: 3, message: "BlaBla", likesCount: 7},
        {id: 4, message: "DaDa", likesCount: 5},
    ],
    profile: null,
    status: ""
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
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status,
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile,
            }
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.postId),
            }
        default:
            return state;
    }
}

export const addPostAC = (postText: string): addPostActionType => ({type: ADD_POST, postText: postText})

export const setUserProfileAC = (profile: ProfileType): setUserProfileActionType => (
    {type: SET_USER_PROFILE, profile}
)

export const setStatusAC = (status: string): setUserStatusActionType => (
    {type: SET_STATUS, status}
)

export const deletePostAC = (postId: number) => (
    {type: DELETE_POST, postId} as const
)

// thunks
export const getUserProfileTC = (userId: number) => (dispatch: AppDispatch) => {
    profileAPI.getProfile(userId)
        .then(response => {
            dispatch(setUserProfileAC(response.data));
        });
}

export const getStatusTC = (userId: number) => (dispatch: AppDispatch) => {
    profileAPI.getStatus(userId)
        .then(response => {
            dispatch(setStatusAC(response.data));
        });
}

export const updateStatusTC = (status: string) => (dispatch: AppDispatch) => {
    profileAPI.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatusAC(status));
            }
        });
}

