import React, {PropsWithChildren} from 'react';
import s from './Main.module.css'

type MainPropsType = {

}

export const Main = ({children}: PropsWithChildren<MainPropsType>) => {
    return (
        <main className={s.main}>
            {children}
        </main>
    );
};