import styles from "./Users.module.css";
import {UsersPageType, UserType} from "../../../redux/users-reducer";
import userPhoto from "../../../assets/images/avatar4.png";
import React from "react";
import {NavLink} from "react-router-dom";
import axios from "axios";

type UsersFCPropsType = {
    onPageChanged: (pageNumber: number) => void
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    toggleFollowingProgress: (isFetching: boolean, userId: number) => void
} & UsersPageType

export const UsersFC: React.FC<UsersFCPropsType> = (props) => {

    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }


    return (
        <div>
            <div>
                {pages.map(p => {
                    return <span
                        className={`${styles.page} ${props.currentPage === p ? styles.selectedPage : ""}`}
                        onClick={() => {
                            props.onPageChanged(p)
                        }}
                    >{p}</span>
                })}
            </div>
            {/*<button onClick={this.getUses}>Get Uses</button>*/}
            {
                props.users.map((u: UserType) =>
                    <div key={u.id}>
                            <span>
                                 <div>
                                     <NavLink to={"/profile/" + u.id}>
                                         <img
                                             src={u.photos.small !== null ? u.photos.small : userPhoto}
                                             alt={u.name}
                                             className={styles.userPhoto}
                                         />
                                     </NavLink>
                                 </div>
                                <div>
                                    {u.followed ?
                                        <button
                                            disabled={props.followingInProgress.some(id => id === u.id)}
                                            onClick={() => {
                                            props.toggleFollowingProgress(true, u.id)
                                            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                                {
                                                    withCredentials: true,
                                                    headers: {
                                                        "API-KEY": '62a6656e-ad1b-4495-8bfe-e56dcc639e6b'
                                                    }
                                                })
                                                .then(response => {
                                                    if (response.data.resultCode === 0) {
                                                        props.unfollow(u.id)
                                                    }
                                                    props.toggleFollowingProgress(false, u.id)
                                                });

                                        }}>Unfollow</button> :
                                        <button
                                            disabled={props.followingInProgress.some(id => id === u.id)}
                                            onClick={() => {
                                            props.toggleFollowingProgress(true, u.id)
                                            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {},
                                                {
                                                    withCredentials: true,
                                                    headers: {
                                                        "API-KEY": '62a6656e-ad1b-4495-8bfe-e56dcc639e6b'
                                                    }
                                                })
                                                .then(response => {
                                                    if (response.data.resultCode === 0) {
                                                        props.follow(u.id)
                                                    }
                                                    props.toggleFollowingProgress(false, u.id)
                                                });

                                        }}>Follow</button>
                                    }
                                </div>
                            </span>
                        <span>
                                <span>
                                     <div>{u.name}</div>
                                     <div>{u.status}</div>
                                </span>
                                <span>
                                    <div>{"u.location.country"}</div>
                                    <div>{"u.location.city"}</div>
                                </span>
                            </span>
                    </div>)
            }
        </div>
    )
}