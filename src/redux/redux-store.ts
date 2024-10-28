import {Action, applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import {usersReducer} from "./users-reducer";
import {authReducer} from "./auth-reducer";
import thunkMiddleware, {ThunkDispatch} from "redux-thunk";

// объединяя reducer-ы с помощью combineReducers,
// мы задаём структуру нашего единственного объекта-состояния
let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer
})

// определить автоматически тип всего объекта состояния
export type AppStateType = ReturnType<typeof rootReducer>


export type AppDispatch = ThunkDispatch<AppStateType, unknown, Action>
export let store = createStore(rootReducer, applyMiddleware(thunkMiddleware)); //создает внутри себя стейт у которого есть 3 свойства(profilePage, dialogsPage, sidebar)

// @ts-ignore
window.store = store;

