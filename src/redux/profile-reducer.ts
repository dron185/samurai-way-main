import {ActionsType, PostType, ProfilePageType} from "./state";

const profileReducer = (state: ProfilePageType, action: ActionsType) => {

    switch (action.type) {
        case 'ADD-POST':
            const newPost: PostType = {
                id: new Date().getTime(),
                message: action.postText,
                likesCount: 0,
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case 'CHANGE-NEW-TEXT':
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}

export const addPostAC = (postText: string) => ({type: 'ADD-POST', postText: postText} as const)

export const changeNewTextAC = (newText: string) => {
    return {
        type: 'CHANGE-NEW-TEXT',
        newText: newText,
    } as const
}

export default profileReducer;

