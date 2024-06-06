// import React from 'react';
// import {UsersContainerPropsType} from "./UsersContainer";
// import styles from './Users.module.css'
// import axios from "axios";
// import userPhoto from '../../../assets/images/avatar4.png'
//
// export const Users: React.FC<UsersContainerPropsType> = (props) => {
//     const getUses = () => {
//         if (props.users.length === 0) {
//
//             axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
//                 props.setUsers(response.data.items)
//             });
//         }
//     }
//
//
//     return (
//         <div>
//             <button onClick={getUses}>Get Uses</button>
//             {
//                 props.users.map(u =>
//                     <div key={u.id}>
//                         <span>
//                             <div><img
//                                 src={u.photos.small !== null ? u.photos.small : userPhoto}
//                                 alt=""
//                                 className={styles.userPhoto}
//                             /></div>
//                             <div>
//                                 {u.followed ?
//                                     <button onClick={() => {
//                                         props.unfollow(u.id)
//                                     }}>Unollow</button> :
//                                     <button onClick={() => {
//                                         props.follow(u.id)
//                                     }}>Follow</button>
//                                 }
//                             </div>
//                         </span>
//                         <span>
//                             <span>
//                                 <div>{u.name}</div>
//                                 <div>{u.status}</div>
//                             </span>
//                             <span>
//                                 <div>{"u.location.country"}</div>
//                                 <div>{"u.location.city"}</div>
//                             </span>
//                         </span>
//                     </div>)
//             }
//         </div>
//     );
// };

export {}
