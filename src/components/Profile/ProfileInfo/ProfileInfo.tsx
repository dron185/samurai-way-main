import React from 'react';
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    src="https://static6.depositphotos.com/1004999/574/i/450/depositphotos_5743212-stock-photo-green-environment.jpg"
                    alt=""/>
            </div>
            <div className={s.descriptionBlock}>
                ava +desc
            </div>
        </div>
    );
};

export default ProfileInfo;