import React from 'react';
import s from './Profile.module.css'
import {ProfileInfo} from "./profileInfo/ProfileInfo";
import {NewMyPostsContainer} from "./myPosts/NewMyPostsContainer";

export const Profile: React.FC = () => {
    return (
        <div className={s.profile}>
            <ProfileInfo />
            {/*<MyPosts/>*/}
            <NewMyPostsContainer />
        </div>
    );
};