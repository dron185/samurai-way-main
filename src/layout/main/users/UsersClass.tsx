import React from 'react';
import userPhoto from "../../../assets/images/avatar4.png";
import styles from "./Users.module.css";
import axios from "axios";
import {UserType} from "../../../redux/users-reducer";

export class UsersClass extends React.Component<any, any> {
    // constructor(props: any) {
    //     super(props);
    // }

    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            this.props.setUsers(response.data.items)
        });
    }

    render() {
        return (
            <div>
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
