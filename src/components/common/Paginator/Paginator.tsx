import styles from "./Paginator.module.css";
import React from "react";

type Props = {
    onPageChanged: (pageNumber: number) => void
    pageSize: number
    totalUsersCount: number
    currentPage: number
}

export const Paginator = (props: Props) => {

    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
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
    )
}