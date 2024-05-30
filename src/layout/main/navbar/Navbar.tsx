import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import avatar from '../../../assets/images/avatar2.png'
import {useSelector} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {DialogType} from "../../../redux/dialogs-reducer";


export const Navbar: React.FC = () => {
    const friends = useSelector<AppStateType, DialogType[]>(state => state.sidebar.friends)

    return (
        <div>
            <nav className={s.nav}>
                <ul className={s.list}>
                    {/*<li className={`${s.item} ${s.active}`}>*/}
                    <li className={s.item}>
                        <NavLink to={"/profile"} activeClassName={s.activeLink}>Profile</NavLink>
                    </li>
                    <li className={s.item}>
                        <NavLink to={"/dialogs"} activeClassName={s.activeLink}>Messages</NavLink>
                    </li>
                    <li className={s.item}>
                        <NavLink to={"/news"} activeClassName={s.activeLink}>News</NavLink>
                    </li>
                    <li className={s.item}>
                        <NavLink to={"/music"} activeClassName={s.activeLink}>Music</NavLink>
                    </li>
                    <li className={s.item}>
                        <NavLink to={"/settings"} activeClassName={s.activeLink}>Settings</NavLink>
                    </li>
                </ul>
            </nav>
            <div className={s.friends}>
                <h3 className={s.friendsTitle}>Friends</h3>
                <div className={s.friendsContainer}>
                    {friends.map(friend =>
                        <div key={friend.id} className={s.friend}>
                            <img className={s.avatar} src={avatar} alt="friend"/>
                            <div className={s.name}>{friend.name}</div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};