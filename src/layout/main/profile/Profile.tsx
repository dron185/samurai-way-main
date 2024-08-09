import React from 'react';
import s from './Profile.module.css'
import {ProfileInfo} from "./profileInfo/ProfileInfo";
import {NewMyPostsContainer} from "./myPosts/NewMyPostsContainer";
import {ProfileType} from "../../../redux/profile-reducer";

type ProfilePropsType = {
    profile: ProfileType | null
}

export const Profile: React.FC<ProfilePropsType> = (props) => {
    return (
        <div className={s.profile}>
            <ProfileInfo profile={props.profile}/>
            {/*<MyPosts/>*/}
            <NewMyPostsContainer />
        </div>
    );
};