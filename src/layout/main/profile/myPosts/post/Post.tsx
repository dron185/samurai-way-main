import React from 'react';
import s from './Post.module.css';

type PostPropsType = {
    message: string
    likesCount: number
}

export const Post = (props: PostPropsType) => {

    return (
        <div className={s.item}>
            <img src="https://i.pinimg.com/564x/1e/d3/0d/1ed30d98f49be532ae58c62f33677b16.jpg" alt=""/>
            {props.message}
            <div>
                <span>like</span> {props.likesCount}
            </div>
        </div>
    );
};