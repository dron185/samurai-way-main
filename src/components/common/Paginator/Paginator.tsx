import styles from "./Paginator.module.css";
import React, {useState} from "react";

type Props = {
    onPageChanged: (pageNumber: number) => void
    pageSize: number
    totalItemsCount: number
    currentPage: number
    portionSize: number
}

export const Paginator = (props: Props) => {

    const pagesCount = Math.ceil(props.totalItemsCount / props.pageSize);
    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    const portionsCount = Math.ceil(pagesCount / props.portionSize);
    const [portionNumber, setPortionNumber] = useState(1);
    const leftPortionPageNumber = (portionNumber - 1) * props.portionSize + 1;
    const rightPortionPageNumber = portionNumber * props.portionSize;

    return (
        // <div>
        //     {pages.map(p => {
        //         return <span
        //             className={`${styles.page} ${props.currentPage === p ? styles.selectedPage : ""}`}
        //             onClick={() => {
        //                 props.onPageChanged(p)
        //             }}
        //         >{p}</span>
        //     })}
        // </div>

        <div className={styles.paginatorContainer}>
            {portionNumber > 1 &&
                <button className={styles.button} onClick={() => {
                    setPortionNumber(portionNumber - 1)
                }}>PREV</button>
            }

            {pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map(p => {
                    return <span
                        className={`${styles.page} ${props.currentPage === p ? styles.selectedPage : ""}`}
                        onClick={() => {
                            props.onPageChanged(p)
                        }}
                    >{p}</span>
                })
            }
            {portionsCount > portionNumber &&
                <button className={styles.button}
                    onClick={() => {
                    setPortionNumber(portionNumber + 1)
                }}>NEXT</button>
            }
        </div>
    )
}