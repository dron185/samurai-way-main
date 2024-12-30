import React, {ComponentPropsWithoutRef, PropsWithChildren} from 'react';
import s from './Container.module.css'

type Props = ComponentPropsWithoutRef<'div'>

export const Container = ( { children, className, ...props }: Props  ) => {
    return (
        <div className={`${s.container} ${className}`}>
            {children}
        </div>
    );
};