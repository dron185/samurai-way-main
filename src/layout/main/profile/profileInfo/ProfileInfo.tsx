import React, {ChangeEvent, useState} from 'react';
import s from './ProfileInfo.module.css'
import {ProfileType} from "../../../../redux/profile-reducer";
import {Preloader} from "../../../../components/preloader/Preloader";
import {ProfileStatusWithHooks} from "./ProfileStatusWiyhHooks";
import userPhoto from "../../../../assets/images/avatar4.png";
import ProfileDataFormReduxForm from "./ProfileDataForm/ProfileDataForm";
import {ProfileData} from "./ProfileData/ProfileData";
import {FormDataType} from "../../../../components/Login/Login";

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

    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length) {
            props.savePhoto(e.target.files[0]);
        }
    }

    const onSubmit = (formData: FormDataType) => {
        console.log(formData)
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

                {editMode ? <ProfileDataFormReduxForm profile={props.profile} onSubmit={onSubmit}/> :
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






