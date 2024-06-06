import React from 'react';
import userPhoto from "../../../assets/images/avatar4.png";
import styles from "./Users.module.css";
import axios from "axios";
import {UserType} from "../../../redux/users-reducer";
import {UsersContainerPropsType} from "./UsersContainer";

export class UsersClass extends React.Component<UsersContainerPropsType> {
    // constructor(props: any) {
    //     super(props);
    // }

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        });
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        });
    }

    render() {

        const pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        const pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return (
            //<UsersFunc/>
            <div>
                <div>
                    {pages.map(p => {
                        return <span
                            className={`${styles.page} ${this.props.currentPage === p ? styles.selectedPage : ""}`}
                            onClick={()=>{ this.onPageChanged(p) }}
                        >{p}</span>
                    })}
                </div>
                {/*<button onClick={this.getUses}>Get Uses</button>*/}
                {
                    this.props.users.map((u: UserType) =>
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
                                            this.props.unfollow(u.id)
                                        }}>Unollow</button> :
                                        <button onClick={() => {
                                            this.props.follow(u.id)
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
        );
    }
}


