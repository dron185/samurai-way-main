import React from 'react';
import s from './Profile.module.css'
import {ProfileInfo} from "./profileInfo/ProfileInfo";
import {MyPosts} from "./myPosts/MyPosts";
import {ActionsType, ProfilePageType} from '../../../redux/state';

type ProfilePropsType = {
    profilePage: ProfilePageType
    // addPostCallback: (postText: string) => void
    // changeNewTextCallback: (newText: string) => void
    dispatch: (action: ActionsType) => void
}

export const Profile: React.FC<ProfilePropsType> = (props) => {
    return (
        <div className={s.profile}>
            <ProfileInfo/>
            <MyPosts
                posts={props.profilePage.posts}
                newPostText={props.profilePage.newPostText}
                dispatch={props.dispatch}

                // addPostCallback={props.addPostCallback}
                // changeNewTextCallback={props.changeNewTextCallback}
            />
        </div>
    );
};