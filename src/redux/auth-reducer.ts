import {authAPI, DataType, LoginParams} from "../api/api";
import {AppDispatch} from "./redux-store";

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
                ...action.payload
            }
        default:
            return state;
    }
}

export const setAuthUserDataAC = (data: InitialUsersStateType) => ({type: SET_USER_DATA, payload: data} as const)


// thunks

export const getAuthUserDataTC = () => (dispatch: AppDispatch) => {
    authAPI.me().then(response => {
        if (response.data.resultCode === 0) {
            const {id, login, email} = response.data.data;
            dispatch(setAuthUserDataAC({id, login, email, isAuth: true}))
        }
    })
}

export const loginTC = (data: LoginParams) => (dispatch: AppDispatch) => {
    authAPI.login(data).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(getAuthUserDataTC())
        }
    })
}

export const logoutTC = () => (dispatch: AppDispatch) => {
    authAPI.logout().then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserDataAC({id: null, login: null, email: null, isAuth: false}))
        }
    })
}

