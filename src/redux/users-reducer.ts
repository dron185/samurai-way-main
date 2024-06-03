import photo1 from '../assets/images/avatar4.png'
import photo2 from '../assets/images/avatar5.png'
import photo3 from '../assets/images/avatar6.png'

type LocationType = {
    city: string
    country: string
}

// export type UserType = {
//     id: number
//     photoUrl: string
//     followed: boolean
//     name: string
//     status: string
//     location: LocationType
// }

export type UserType = {
    name: string
    id: number
    uniqueUrlName: string
    photos : {
        small: string
        large: string
    }
    followed: boolean
    status: string
}

export type UsersPageType = {
    users: UserType[]
}

export type ActionsType =
    | ReturnType<typeof followAC>
    | ReturnType<typeof unfollowAC>
    | ReturnType<typeof setUsersAC>

let initialUsersState: UsersPageType = {
    users: []
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
            return {
                ...state, users: [...state.users, ...action.users]
            }
        default:
            return state;
    }
}

export const followAC = (userId: number) => ({type: 'FOLLOW', userId} as const)
export const unfollowAC = (userId: number) => ({type: 'UNFOLLOW', userId} as const)
export const setUsersAC = (users: UserType[]) => ({type: 'SET-USERS', users} as const)



