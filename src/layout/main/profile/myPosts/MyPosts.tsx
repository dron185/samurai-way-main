import React from 'react';
import s from './MyPosts.module.css';
import {Post} from './post/Post'

type postType = {
    id: string
    message: string
    likesCount: number
}
type postsDataType = postType[]

export const MyPosts = () => {
    let posts: postsDataType = [
        {id: '1', message: 'Hi, how are you?', likesCount: 12},
        {id: '2', message: "It's my first post", likesCount: 11},
        {id: '3', message: "BlaBla", likesCount: 7},
        {id: '4', message: "DaDa", likesCount: 5},
    ]
    let postsElements = posts.map(el => <Post key={el.id} message={el.message} likesCount={el.likesCount}/>)

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
                {/*<button>Remove</button>*/}
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
};