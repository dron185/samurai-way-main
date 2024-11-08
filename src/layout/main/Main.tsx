import React, {ReactNode} from 'react';
import s from './Main.module.css'

type MainPropsType = {
    children: ReactNode
}

export const Main = ({children}: MainPropsType) => {
    return (
        <main className={s.main}>
            {children}
        </main>
    );
};