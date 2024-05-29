import React from 'react';
import s from './Profile.module.css'
import {ProfileInfo} from "./profileInfo/ProfileInfo";
import {MyPostsContainer} from "./myPosts/MyPostsContainer";

export const Profile: React.FC = () => {
    return (
        <div className={s.profile}>
            <ProfileInfo />
            {/*<MyPosts/>*/}
            <MyPostsContainer />
        </div>
    );
};