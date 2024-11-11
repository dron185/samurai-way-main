import styles from "./Users.module.css";
import {UserType} from "../../../redux/users-reducer";
import userPhoto from "../../../assets/images/avatar4.png";
import React from "react";
import {NavLink} from "react-router-dom";

type Props = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    user: UserType
    followingInProgress: any[]
}

export const User= ({user, followingInProgress, unfollow, follow}: Props) => {

    return (
        <div>
            <span>
                <div>
                    <NavLink to={"/profile/" + user.id}>
                        <img
                            src={user.photos.small !== null ? user.photos.small : userPhoto}
                            alt={user.name}
                            className={styles.userPhoto}
                        />
                                     </NavLink>
                </div>
                <div>
                    {user.followed ?
                        <button
                            disabled={followingInProgress.some(id => id === user.id)}
                            onClick={() => {
                                unfollow(user.id)
                            }}>
                            Unfollow</button> :
                        <button
                            disabled={followingInProgress.some(id => id === user.id)}
                            onClick={() => {
                                follow(user.id)
                            }}>
                            Follow</button>
                    }
                </div>
            </span>
            <span>
                <span>
                    <div>{user.name}</div>
                    <div>{user.status}</div>
                </span>
                <span>
                    <div>{"user.location.country"}</div>
                    <div>{"user.location.city"}</div>
                </span>
            </span>
        </div>
    )
}