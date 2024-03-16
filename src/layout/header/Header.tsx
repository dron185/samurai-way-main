import React from 'react';
import s from './Header.module.css';
import {Container} from "../../components/container/Container";
import logo from "../../assets/images/logo.svg"

export const Header = () => {
    return (
        <header className={s.header}>
           <Container>
               <img
                   src={logo}
                   alt="logo"/>
           </Container>
        </header>
    );
};