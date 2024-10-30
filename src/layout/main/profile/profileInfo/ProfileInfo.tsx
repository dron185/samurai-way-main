import React from 'react';
import s from './ProfileInfo.module.css'
import photo from '../../../../assets/images/leaves-1350175_1920.jpg'
import {ProfileType} from "../../../../redux/profile-reducer";
import {Preloader} from "../../../../components/preloader/Preloader";
import {ProfileStatus} from "./ProfileStatus";

type Props = {
    profile: ProfileType | null
    status: string
    updateStatus: (status: string) => void
}

export const ProfileInfo = (props: Props) => {
    //если props.profile==null || props.profile==undefined-сокращенно:
    if (!props.profile) {
        return <Preloader/>
    }

    const info = [
        {title: 'About me: ', value: props.profile.aboutMe},
        {title: 'Full name: ', value: props.profile.fullName},
        {title: 'Looking for a job description: ', value: props.profile.lookingForAJobDescription},
        {title: 'Contacts: ', value: ''},
        {title: 'Facebook: ', value: props.profile.contacts.facebook},
        {title: 'Github: ', value: props.profile.contacts.github},
        {title: 'Twitter: ', value: props.profile.contacts.twitter},
        {title: 'Instagram: ', value: props.profile.contacts.instagram},
        {title: 'VK: ', value: props.profile.contacts.vk},
        {title: 'Youtube: ', value: props.profile.contacts.youtube},
        {title: 'Website: ', value: props.profile.contacts.website},
        {title: 'Main link: ', value: props.profile.contacts.mainLink},
        {title: 'Looking for a job: ', value: props.profile.lookingForAJob}
    ];

    return (
        <div className={s.profileInfo}>
            <div className={s.profilePhoto}>
                <img src={photo} alt="Photo"/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large} alt="avatar"/>
                <ProfileStatus status={props.status}/>
                {info.map(el => <div><span className={s.header}>{el.title}</span>{el.value}</div>)}
            </div>
        </div>
    );
};


