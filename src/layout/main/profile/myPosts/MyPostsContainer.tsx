import React from 'react';
import {addPostAC, changeNewTextAC, newPostTextType, PostType} from "../../../../redux/profile-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../../redux/redux-store";
import {MyPosts} from "./MyPosts";

//Контейнерные компоненты занимаются управлением состоянием и логикой.

export const MyPostsContainer: React.FC = () => {
    const posts = useSelector<AppStateType, PostType[]>(state => state.profilePage.posts);
    const newPostText = useSelector<AppStateType ,newPostTextType>(state => state.profilePage.newPostText)
    const dispatch = useDispatch();


    const addNewPostHandler = () => {
        dispatch(addPostAC(newPostText));
    }

    const newTextChangeHandler = (text: string) => {
        dispatch(changeNewTextAC(text));
    }

    return (
        <MyPosts
            changeNewText={newTextChangeHandler}
            addNewPost={addNewPostHandler}
            posts={posts}
            newPostText={newPostText}
        />
    );
};




