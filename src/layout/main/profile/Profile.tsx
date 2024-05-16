import React from 'react';
import s from './Profile.module.css'
import {ProfileInfo} from "./profileInfo/ProfileInfo";
import {MyPosts} from "./myPosts/MyPosts";

export const Profile: React.FC = () => {
    return (
        <div className={s.profile}>
            <ProfileInfo/>
            <MyPosts/>
        </div>
    );
};