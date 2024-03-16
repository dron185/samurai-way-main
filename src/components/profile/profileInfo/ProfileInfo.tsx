import React from 'react';
import s from './ProfileInfo.module.css'
import photo from '../../../assets/images/leaves-1350175_1920.jpg'

const ProfileInfo = () => {
    return (
        <div className={s.profileInfo}>
            <div className={s.profilePhoto}>
                <img src={photo} alt="Photo"/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    );
};

export default ProfileInfo;