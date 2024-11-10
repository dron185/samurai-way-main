import {authAPI, DataType, LoginParams} from "../api/api";
import {AppDispatch} from "./redux-store";
import {stopSubmit} from "redux-form";

export type ActionsType = ReturnType<typeof setAuthUserDataAC>
export type InitialUsersStateType = DataType & {
    isAuth: boolean
}

const SET_USER_DATA = 'samurai-network/auth/SET_USER_DATA';

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

export const getAuthUserDataTC = () => async (dispatch: AppDispatch) => {
    const response = await authAPI.me();
    if (response.data.resultCode === 0) {
        const {id: userId, login, email} = response.data.data;
        dispatch(setAuthUserDataAC({id: userId, login, email, isAuth: true}))
    }

}

export const loginTC = (data: LoginParams) => async (dispatch: AppDispatch) => {
    const response = await authAPI.login(data)

    if (response.data.resultCode === 0) {
        dispatch(getAuthUserDataTC())
    } else {
        let message = response.data.messages.length > 0 ?
            response.data.messages[0] : "Some error"
        dispatch(stopSubmit("login", {_error: message}))
    }

}

export const logoutTC = () => async (dispatch: AppDispatch) => {
    const response = await authAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserDataAC({id: null, login: null, email: null, isAuth: false}))
    }
}

