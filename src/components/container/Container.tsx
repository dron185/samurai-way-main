import React, {PropsWithChildren} from 'react';
import s from './Container.module.css'

type Props =  {

}


export const Container = ( { children }:PropsWithChildren<Props>  ) => {
    return (
        <div className={s.container}>
            {children}
        </div>
    );
};