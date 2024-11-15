import {AppDispatch} from "./redux-store";
import {profileAPI, ProfilePhotosType} from "../api/api";

export type PostType = {
    id: number
    message: string
    likesCount: number
}

export type ProfilePageType = {
    posts: PostType[]
    profile: ProfileType/* | null*/
    status: string
}

export type ProfileContactsType = {
    facebook: string
    website: string
    vk: string
    twitter: string
    instagram: string
    youtube: string
    github: string
    mainLink: string
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
    profile: ProfileType/* | null*/
}

export type setUserStatusActionType = {
    type: typeof SET_STATUS,
    status: string
}

export type deletePostActionType = ReturnType<typeof deletePostAC>

export type savePhotoSuccessActionType = ReturnType<typeof savePhotoSuccessAC>

export type ActionsType =
    | addPostActionType
    | setUserProfileActionType
    | setUserStatusActionType
    | deletePostActionType
    | savePhotoSuccessActionType

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';
const DELETE_POST = 'DELETE-POST';
const SAVE_PHOTO_SUCCESS = 'SAVE-PHOTO-SUCCESS';


let initialProfileState: ProfilePageType = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: "It's my first post", likesCount: 11},
        {id: 3, message: "BlaBla", likesCount: 7},
        {id: 4, message: "DaDa", likesCount: 5},
    ],
    profile: {
        aboutMe: "",
        contacts: {
            facebook: "",
            website: "",
            vk: "",
            twitter: "",
            instagram: "",
            youtube: "",
            github: "",
            mainLink: "",
        },
        lookingForAJob: true,
        lookingForAJobDescription: "",
        fullName: "",
        userId: 0,
        photos: {
            small: "",
            large: "",
        }
    },
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
        case SAVE_PHOTO_SUCCESS:
            return {
                ...state, profile: {...state.profile, photos: action.photos}
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

export const savePhotoSuccessAC = (photos: ProfilePhotosType) => (
    {type: SAVE_PHOTO_SUCCESS, photos} as const
)


// thunks
export const getUserProfileTC = (userId: number) => async (dispatch: AppDispatch) => {
    const response = await profileAPI.getProfile(userId)
    dispatch(setUserProfileAC(response.data));
}

export const getStatusTC = (userId: number) => async (dispatch: AppDispatch) => {
    const response = await profileAPI.getStatus(userId)
    dispatch(setStatusAC(response.data));
}

export const updateStatusTC = (status: string) => async (dispatch: AppDispatch) => {
    const response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatusAC(status));
    }
}

export const savePhotoTC = (file: File) => async (dispatch: AppDispatch) => {
    const response = await profileAPI.savePhoto(file)
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccessAC(response.data.data.photos));
    }
}

