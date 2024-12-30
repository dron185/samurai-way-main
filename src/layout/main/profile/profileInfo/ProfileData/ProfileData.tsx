import s from "../ProfileInfo.module.css";
import {ProfileContactsType, ProfileType} from "../../../../../redux/profile-reducer";
import React from "react";

type ContactProps = {
    contactTitle: string
    contactValue: string
}

type ProfileDataProps = {
    profile: ProfileType
    isOwner: boolean
    goToEditMode: () => void
}

export const ProfileData = ({profile, isOwner, goToEditMode}: ProfileDataProps) => {

    return (
        <div className={s.data}>
            {isOwner && <div>
                <button onClick={goToEditMode}>edit</button>
            </div>}
            <div>
                <span>Full name:</span> {profile.fullName}
            </div>
            <div>
                <span>Looking for a job:</span> {profile.lookingForAJob ? "yes" : "no"}
            </div>
            {profile.lookingForAJob &&
                <div>
                    <span>My professional skills:</span> {profile.lookingForAJobDescription}
                </div>
            }
            <div>
                <span>About me:</span> {profile.aboutMe}
            </div>
            <div>
                <span>Contacts:</span> {Object.keys(profile.contacts).map((key: string) => {
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

export const Contact = ({contactTitle, contactValue}: ContactProps) => {
    return <div className={s.contact}><span>{contactTitle}:</span> {contactValue}</div>
}