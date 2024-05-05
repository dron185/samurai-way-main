import {ActionsType, SidebarType} from "./store";

let initialSidebarState: SidebarType = {
    friends: [
        {id: 1, name: 'Andrew'},
        {id: 2, name: 'Sasha'},
        {id: 3, name: 'Sveta'},
    ]
}

const sidebarReducer = (state = initialSidebarState, action: ActionsType) => {
    return state;
}

export default sidebarReducer;
