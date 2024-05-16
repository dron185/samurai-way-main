
export type DialogType = {
    id: number
    name: string
}

export type SidebarType = {
    friends: DialogType[]
}

let initialSidebarState: SidebarType = {
    friends: [
        {id: 1, name: 'Andrew'},
        {id: 2, name: 'Sasha'},
        {id: 3, name: 'Sveta'},
    ]
}

const sidebarReducer = (state = initialSidebarState, action: any) => {
    return state;
}

export default sidebarReducer;
