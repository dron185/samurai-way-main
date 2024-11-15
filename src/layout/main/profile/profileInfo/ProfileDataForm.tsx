import {ProfileContactsType, ProfileType} from "../../../../redux/profile-reducer";
import React from "react";

type Props = {
    profile: ProfileType
}

export const ProfileDataForm = ({profile}: Props) => {
    return (
        <form>
            {/*<div>*/}
            {/*    <button onClick={goToEditMode}>save</button>*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    <b>Full name</b>: {profile.fullName}*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    <b>Looking for a job</b>: {profile.lookingForAJob ? "yes" : "no"}*/}
            {/*</div>*/}
            {/*{profile.lookingForAJob &&*/}
            {/*    <div>*/}
            {/*        <b>My professional skills</b>: {profile.lookingForAJobDescription}*/}
            {/*    </div>*/}
            {/*}*/}
            {/*<div>*/}
            {/*    <b>About me</b>: {profile.aboutMe}*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    <b>Contacts</b>: {Object.keys(profile.contacts).map((key: string) => {*/}
            {/*    return <Contact*/}
            {/*        key={key}*/}
            {/*        contactTitle={key}*/}
            {/*        contactValue={profile.contacts[key as keyof ProfileContactsType]}*/}
            {/*    />*/}
            {/*})}*/}
            {/*</div>*/}
        </form>
    )
}