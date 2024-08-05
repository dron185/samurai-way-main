import photo1 from '../assets/images/avatar4.png'
import photo2 from '../assets/images/avatar5.png'
import photo3 from '../assets/images/avatar6.png'

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
}

export type ActionsType =
    | ReturnType<typeof followAC>
    | ReturnType<typeof unfollowAC>
    | ReturnType<typeof setUsersAC>
    | setCurrentPageActionType
    | setUsersTotalCountActionType
    | toggleIsFetchingActionType

const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';


let initialUsersState: UsersPageType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true
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
            //return {...state, users: action.users}
            return {...state, users: [...state.users, ...action.users]}
        case SET_CURRENT_PAGE:
            return {
                ...state, currentPage: action.currentPage
            }
        case SET_USERS_TOTAL_COUNT:
            return {...state, totalUsersCount: action.count}
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
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


