import React from 'react';
import {UsersContainerPropsType} from "./UsersContainer";
import styles from './Users.module.css'
import photo1 from "../../../assets/images/avatar4.png";
import photo2 from "../../../assets/images/avatar5.png";
import photo3 from "../../../assets/images/avatar6.png";

export const Users: React.FC<UsersContainerPropsType> = (props) => {
    if(props.users.length === 0) {
        props.setUsers(
            [
                {
                    id: 1,
                    photoUrl: photo1,
                    followed: false,
                    fullName: 'Dmitry',
                    status: 'I am a boss',
                    location: {city: 'Minsk', country: 'Belarus'}
                },
                {
                    id: 2,
                    photoUrl: photo2,
                    followed: true,
                    fullName: 'Andrew',
                    status: 'I am a boss too',
                    location: {city: 'Rome', country: 'Italy'}
                },
                {
                    id: 3,
                    photoUrl: photo3,
                    followed: false,
                    fullName: 'Sasha',
                    status: 'I am a boss too',
                    location: {city: 'Berlin', country: 'Germany'}
                },
            ]
        )
    }

    return (
        <div>
            {
                props.users.map(u =>
                    <div key={u.id}>
                        <span>
                            <div><img src={u.photoUrl} alt="" className={styles.userPhoto}/></div>
                            <div>
                                {u.followed ?
                                    <button onClick={() => {
                                        props.unfollow(u.id)
                                    }}>Unollow</button> :
                                    <button onClick={() => {
                                        props.follow(u.id)
                                    }}>Follow</button>
                                }
                            </div>
                        </span>
                        <span>
                            <span>
                                <div>{u.fullName}</div>
                                <div>{u.status}</div>
                            </span>
                            <span>
                                <div>{u.location.country}</div>
                                <div>{u.location.city}</div>
                            </span>
                        </span>
                    </div>)
            }
        </div>
    );
};