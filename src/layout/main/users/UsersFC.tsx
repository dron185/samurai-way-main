import {UsersPageType, UserType} from "../../../redux/users-reducer";
import React from "react";
import {Paginator} from "../../../components/common/Paginator/Paginator";
import {User} from "./User";

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
                totalUsersCount={totalUsersCount}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChanged={onPageChanged}
            />
            <div>
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