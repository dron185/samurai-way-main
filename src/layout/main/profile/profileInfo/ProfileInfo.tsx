import React, {ChangeEvent, useState} from 'react';
import s from './ProfileInfo.module.css'
import photo from '../../../../assets/images/leaves-1350175_1920.jpg'
import {ProfileContactsType, ProfileType} from "../../../../redux/profile-reducer";
import {Preloader} from "../../../../components/preloader/Preloader";
import {ProfileStatusWithHooks} from "./ProfileStatusWiyhHooks";
import userPhoto from "../../../../assets/images/avatar4.png";
import {ProfileDataForm} from "./ProfileDataForm";

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
            <div className={s.profilePhoto}>
                <img src={photo} alt="Photo"/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large || userPhoto}
                     alt="avatar"
                     className={s.mainPhoto}
                />
                {props.isOwner && <input type="file" onChange={onMainPhotoSelected}/>}

                {editMode ? <ProfileDataForm profile={props.profile}/> :
                    <ProfileData
                        profile={props.profile}
                        isOwner={props.isOwner}
                        goToEditMode={() => {setEditMode(true)}}/>}

                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
                {/*{info.map(el =>*/}
                {/*    <div key={el.id}>*/}
                {/*        <span className={s.header}>{el.title}</span>{el.value}*/}
                {/*    </div>)}*/}
            </div>
        </div>
    );
};

type ContactProps = {
    contactTitle: string
    contactValue: string
}

type ProfileDataProps = {
    profile: ProfileType
    isOwner: boolean
    goToEditMode: () => void
}

const ProfileData = ({profile, isOwner, goToEditMode}: ProfileDataProps) => {

    return (
        <div>
            {isOwner && <div><button onClick={goToEditMode}>edit</button></div>}
            <div>
                <b>Full name</b>: {profile.fullName}
            </div>
            <div>
                <b>Looking for a job</b>: {profile.lookingForAJob ? "yes" : "no"}
            </div>
            {profile.lookingForAJob &&
                <div>
                    <b>My professional skills</b>: {profile.lookingForAJobDescription}
                </div>
            }
            <div>
                <b>About me</b>: {profile.aboutMe}
            </div>
            <div>
                <b>Contacts</b>: {Object.keys(profile.contacts).map((key: string) => {
                return <Contact
                    key={key}
                    contactTitle={key}
                    contactValue={profile.contacts[key as keyof ProfileContactsType]}
                />
            })}
            </div>
        </div>
    )
}

const Contact = ({contactTitle, contactValue}: ContactProps) => {
    return <div className={s.contact}><b>{contactTitle}</b>: {contactValue}</div>
}


