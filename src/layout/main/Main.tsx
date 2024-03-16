import React, {PropsWithChildren} from 'react';
import s from './Main.module.css'

type MainPropsType = {

}

export const Main = ({children}: PropsWithChildren<MainPropsType>) => {
    return (
        <div className={s.main}>
            {children}
        </div>
    );
};