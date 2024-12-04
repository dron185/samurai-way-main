import React from 'react';
import s from './Footer.module.css';
import {Container} from "../../components/container/Container";

export const Footer = () => {
    return (
        <footer className={s.footer}>
            <Container>
                <div className={s.footerContainer}>Footer</div>
            </Container>
        </footer>
    );
};