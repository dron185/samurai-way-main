import React, {ChangeEvent, useState} from 'react';
import s from './ProfileInfo.module.css'
import {ProfileType} from "../../../../redux/profile-reducer";
import {Preloader} from "../../../../components/preloader/Preloader";
import {ProfileStatusWithHooks} from "./ProfileStatusWiyhHooks";
import userPhoto from "../../../../assets/images/avatar4.png";
import ProfileDataFormReduxForm, {ProfileDataForm} from "./ProfileDataForm/ProfileDataForm";
import {ProfileData} from "./ProfileData/ProfileData";

type Props = {
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (file: File) => void;
}

type InfoItem = {
    id: string
    title: string
    value: string | null | boolean
}

type Info = Array<InfoItem>

export const ProfileInfo = (props: Props) => {
    const [editMode, setEditMode] = useState<boolean>(false)

    //если props.profile==null || props.profile==undefined-сокращенно:
    if (!props.profile) {
        return <Preloader/>
    }

    // const info: Info = [
    //     {id: v1(), title: 'About me: ', value: props.profile.aboutMe},
    //     {id: v1(), title: 'Full name: ', value: props.profile.fullName},
    //     {id: v1(), title: 'Looking for a job description: ', value: props.profile.lookingForAJobDescription},
    //     {id: v1(), title: 'Contacts: ', value: ''},
    //     {id: v1(), title: 'Facebook: ', value: props.profile.contacts.facebook},
    //     {id: v1(), title: 'Github: ', value: props.profile.contacts.github},
    //     {id: v1(), title: 'Twitter: ', value: props.profile.contacts.twitter},
    //     {id: v1(), title: 'Instagram: ', value: props.profile.contacts.instagram},
    //     {id: v1(), title: 'VK: ', value: props.profile.contacts.vk},
    //     {id: v1(), title: 'Youtube: ', value: props.profile.contacts.youtube},
    //     {id: v1(), title: 'Website: ', value: props.profile.contacts.website},
    //     {id: v1(), title: 'Main link: ', value: props.profile.contacts.mainLink},
    //     {id: v1(), title: 'Looking for a job: ', value: props.profile.lookingForAJob}
    // ];

    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length) {
            props.savePhoto(e.target.files[0]);
        }
    }

    return (
        <div className={s.profileInfo}>
            {/*<div className={s.profilePhoto}>*/}
            {/*    <img src={photo} alt="Photo"/>*/}
            {/*</div>*/}
            <div className={s.descriptionBlock}>
                <div className={s.photoContainer}>
                    <img src={props.profile.photos.large || userPhoto}
                         alt="avatar"
                         className={s.mainPhoto}
                    />
                    {props.isOwner && <input type="file" onChange={onMainPhotoSelected}/>}

                    <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
                </div>

                {editMode ? <ProfileDataFormReduxForm profile={props.profile}/> :
                    <ProfileData
                        profile={props.profile}
                        isOwner={props.isOwner}
                        goToEditMode={() => {
                            setEditMode(true)
                        }}/>}


                {/*{info.map(el =>*/}
                {/*    <div key={el.id}>*/}
                {/*        <span className={s.header}>{el.title}</span>{el.value}*/}
                {/*    </div>)}*/}
            </div>
        </div>
    );
};






