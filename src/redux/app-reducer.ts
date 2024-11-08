import {AppDispatch} from "./redux-store";
import {getAuthUserDataTC} from "./auth-reducer";

export type ActionsType = ReturnType<typeof initializedSuccessAC>
export type InitialAppStateType = {
    initialized: boolean
}

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

const initialAppState: InitialAppStateType = {
    initialized: false
}

export const appReducer = (state: InitialAppStateType = initialAppState, action: ActionsType): InitialAppStateType => {

    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        default:
            return state;
    }
}

export const initializedSuccessAC = () => (
    {type: INITIALIZED_SUCCESS} as const)


// thunks

export const initializeAppTC = () => (dispatch: AppDispatch) => {
    let promise = dispatch(getAuthUserDataTC())

    promise.then(() => {
        dispatch(initializedSuccessAC())
    })
}
