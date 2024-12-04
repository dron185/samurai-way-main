import React from 'react';
import s from './Header.module.css';
import {Container} from "../../components/container/Container";
import {NavLink} from "react-router-dom";
import {HeaderContainerPropsType} from "./HeaderContainer";
import {Logo} from "../../components/common/Logo/Logo";

export const Header = (props: HeaderContainerPropsType) => {
    return (
        <header className={s.header}>
            <Container>
                {/*<img src={logo} alt="logo" className={s.logo}/>*/}
                <div className={s.headerContainer}>
                    <Logo/>
                    <div>
                        {props.isAuth
                            ? <div className={s.loginBlock}>
                                <div className={s.login}>{props.login}</div>
                                <button className={s.button} onClick={props.logout}>
                                    Logout
                                </button>
                            </div>
                            : <NavLink to={'/login'}>Login</NavLink>}
                    </div>
                </div>
            </Container>
        </header>
    );
};