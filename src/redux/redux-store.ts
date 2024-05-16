import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

// объединяя reducer-ы с помощью combineReducers,
// мы задаём структуру нашего единственного объекта-состояния
let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer
})

// определить автоматически тип всего объекта состояния
export type ReducersStateType = ReturnType<typeof reducers>

export let store = createStore(reducers); //создает внутри себя стейт у которого есть 3 свойства(profilePage, dialogsPage, sidebar)

