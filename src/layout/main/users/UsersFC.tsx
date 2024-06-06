import styles from "./Users.module.css";
import {UsersPageType, UserType} from "../../../redux/users-reducer";
import userPhoto from "../../../assets/images/avatar4.png";
import React from "react";

type UsersFCPropsType = {
    onPageChanged: (pageNumber: number) => void
    follow: (userId: number) => void
    unfollow: (userId: number) => void
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
                                 <div><img
                                     src={u.photos.small !== null ? u.photos.small : userPhoto}
                                     alt=""
                                     className={styles.userPhoto}
                                 /></div>
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