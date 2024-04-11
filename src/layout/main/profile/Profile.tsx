import React from 'react';
import s from './Profile.module.css'
import {ProfileInfo} from "./profileInfo/ProfileInfo";
import {MyPosts} from "./myPosts/MyPosts";
import { PostType } from '../../../redux/state';

type ProfilePropsType = {
    posts: PostType[]
}

export const Profile: React.FC<ProfilePropsType> = (props) => {
    return (
        <div className={s.profile}>
            <ProfileInfo/>
            <MyPosts posts={props.posts}/>
        </div>
    );
};