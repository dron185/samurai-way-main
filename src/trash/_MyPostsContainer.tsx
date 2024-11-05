import React from 'react';
import {addPostAC, PostType} from "../redux/profile-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../redux/redux-store";
import {MyPosts} from "../layout/main/profile/myPosts/MyPosts";

//Контейнерные компоненты занимаются управлением состоянием и логикой.

export const _MyPostsContainer: React.FC = () => {
    const posts = useSelector<AppStateType, PostType[]>(state => state.profilePage.posts);
    const dispatch = useDispatch();


    const addNewPostHandler = (newPostText: string) => {
        dispatch(addPostAC(newPostText));
    }

    return (
        <MyPosts
            addNewPost={addNewPostHandler}
            posts={posts}
        />
    );
};




