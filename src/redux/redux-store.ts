import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import {usersReducer} from "./users-reducer";

// объединяя reducer-ы с помощью combineReducers,
// мы задаём структуру нашего единственного объекта-состояния
let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer
})

// определить автоматически тип всего объекта состояния
export type AppStateType = ReturnType<typeof rootReducer>

export let store = createStore(rootReducer); //создает внутри себя стейт у которого есть 3 свойства(profilePage, dialogsPage, sidebar)

// @ts-ignore
window.store = store;

