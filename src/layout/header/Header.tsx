import React from 'react';
import s from './Header.module.css';
import {Container} from "../../components/container/Container";
import logo from "../../assets/images/logo.svg"
import {NavLink} from "react-router-dom";
import {HeaderContainerPropsType} from "./HeaderContainer";

export const Header = (props: HeaderContainerPropsType) => {
    return (
        <header className={s.header}>
            <Container>
                <img src={logo} alt="logo" className={s.logo}/>
                <div className={s.loginBlock}>
                    {props.isAuth
                        ? <div>{props.login} - <button onClick={props.logout}>Logout</button></div>
                        : <NavLink to={'/login'}>Login</NavLink>}
                </div>
            </Container>
        </header>
    );
};