import {UsersPageType, UserType} from "../../../redux/users-reducer";
import React from "react";
import {Paginator} from "../../../components/common/Paginator/Paginator";
import {User} from "./User";
import s from "./Users.module.css";

type UsersFCPropsType = {
    onPageChanged: (pageNumber: number) => void
    follow: (userId: number) => void
    unfollow: (userId: number) => void
} & UsersPageType

export const UsersFC: React.FC<UsersFCPropsType> = ({
                                                        currentPage,
                                                        totalUsersCount,
                                                        pageSize,
                                                        onPageChanged,
                                                        ...props
                                                    }) => {
    return (
        <div>
            <Paginator
                totalItemsCount={totalUsersCount}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChanged={onPageChanged}
                portionSize={10}
            />
            <div className={s.users}>
                {
                    props.users.map((u: UserType) =>
                        <User
                            key={u.id}
                            user={u}
                            followingInProgress={props.followingInProgress}
                            follow={props.follow}
                            unfollow={props.unfollow}
                        />)
                }
            </div>
        </div>
    )
}