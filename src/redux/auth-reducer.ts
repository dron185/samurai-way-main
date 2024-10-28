// export type AuthPageType = {
//     id: null | number,
//     email: null | string,
//     login: null | string,
//     //isFetching: boolean
// }


import {DataType} from "../api/api";

export type ActionsType = ReturnType<typeof setAuthUserDataAC>
export type InitialUsersStateType = DataType & {
    isAuth: boolean
}

const SET_USER_DATA = 'SET_USER_DATA';

let initialUsersState: InitialUsersStateType = {
    id: 0,
    email: '',
    login: '',
    isAuth: false
}

export const authReducer = (state: InitialUsersStateType = initialUsersState, action: ActionsType): InitialUsersStateType => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state;
    }
}

export const setAuthUserDataAC = (data: DataType) => ({type: SET_USER_DATA, data} as const)


