import {Dispatch} from "redux";
import {usersAPI} from "../api/api";
import {AppDispatch, AppStateType} from "./redux-store";

// type LocationType = {
//     city: string
//     country: string
// }

// export type UserType = {
//     id: number
//     photoUrl: string
//     followed: boolean
//     name: string
//     status: string
//     location: LocationType
// }

export type setCurrentPageActionType = {
    type: typeof SET_CURRENT_PAGE
    currentPage: number
}

export type setUsersTotalCountActionType = {
    type: typeof SET_USERS_TOTAL_COUNT,
    count: number
}

export type toggleIsFetchingActionType = {
    type: typeof TOGGLE_IS_FETCHING,
    isFetching: boolean
}

export type toggleFollowingProgressActionType = {
    type: typeof TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching: boolean
    userId: number
}

export type UserType = {
    name: string
    id: number
    uniqueUrlName: string
    photos: {
        small: string
        large: string
    }
    followed: boolean
    status: string
}

export type UsersPageType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching?: boolean
    followingInProgress: any[]
}

export type ActionsType =
    | ReturnType<typeof followAC>
    | ReturnType<typeof unfollowAC>
    | ReturnType<typeof setUsersAC>
    | setCurrentPageActionType
    | setUsersTotalCountActionType
    | toggleIsFetchingActionType
    | toggleFollowingProgressActionType

const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';


let initialUsersState: UsersPageType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
}

export const usersReducer = (state: UsersPageType = initialUsersState, action: ActionsType): UsersPageType => {

    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)
            }
        case 'UNFOLLOW':
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)
            }
        case 'SET-USERS':
            return {...state, users: action.users}
        case SET_CURRENT_PAGE:
            return {
                ...state, currentPage: action.currentPage
            }
        case SET_USERS_TOTAL_COUNT:
            return {...state, totalUsersCount: action.count}
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching ?
                    [...state.followingInProgress, action.userId] :
                    state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state;
    }
}

export const followAC = (userId: number) => ({type: 'FOLLOW', userId} as const)
export const unfollowAC = (userId: number) => ({type: 'UNFOLLOW', userId} as const)
export const setUsersAC = (users: UserType[]) => ({type: 'SET-USERS', users} as const)
export const setCurrentPageAC = (currentPage: number): setCurrentPageActionType => (
    {
        type: SET_CURRENT_PAGE,
        currentPage
    }
)
export const setUsersTotalCountAC = (totalUsersCount: number): setUsersTotalCountActionType => (
    {
        type: SET_USERS_TOTAL_COUNT,
        count: totalUsersCount
    }
)
export const toggleIsFetchingAC = (isFetching: boolean): toggleIsFetchingActionType => (
    {
        type: TOGGLE_IS_FETCHING,
        isFetching
    }
)
export const toggleFollowingProgressAC = (isFetching: boolean, userId: number): toggleFollowingProgressActionType => (
    {
        type: TOGGLE_IS_FOLLOWING_PROGRESS,
        isFetching,
        userId
    }
)

// thunks

export const getUsersThunkCreatorTC = (currentPage: number, pageSize: number) => (dispatch: AppDispatch) => {

    dispatch(toggleIsFetchingAC(true)); // - когда идет запрос на сервак

    usersAPI.getUsers(currentPage, pageSize)
        .then(data => {
            dispatch(toggleIsFetchingAC(false)); // - когда приходит ответ
            dispatch(setUsersAC(data.items));
            dispatch(setUsersTotalCountAC(data.totalCount));
        });
}

