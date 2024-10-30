import React from 'react';
import s from './Profile.module.css'
import {ProfileInfo} from "./profileInfo/ProfileInfo";
import {MyPostsContainer} from "./myPosts/MyPostsContainer";
import {ProfileType} from "../../../redux/profile-reducer";

type Props = {
    profile: ProfileType | null
    status: string
    updateStatus: (status: string) => void
}

export const Profile: React.FC<Props> = (props) => {
    return (
        <div className={s.profile}>
            <ProfileInfo
                profile={props.profile}
                status={props.status}
                updateStatus={props.updateStatus}
            />
            <MyPostsContainer />
        </div>
    );
};