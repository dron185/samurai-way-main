import React from 'react';
import s from './Footer.module.css';
import {Container} from "../../components/container/Container";

export const Footer = () => {
    return (
        <footer className={s.footer}>
            <div className={s.footerMain}>
                <Container className={s.footerContainer}>
                    <div className={s.footerContent}>Footer</div>
                </Container>
            </div>
        </footer>
    );
};