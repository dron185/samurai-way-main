import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css';
import {Post} from './post/Post'
import {addPostAC, changeNewTextAC, newPostTextType, PostType} from "../../../../redux/profile-reducer";
import {useDispatch, useSelector} from "react-redux";
import {ReducersStateType} from "../../../../redux/redux-store";


export const MyPosts: React.FC = () => {
    const posts = useSelector<ReducersStateType, PostType[]>(state => state.profilePage.posts);
    const newPostText = useSelector<ReducersStateType ,newPostTextType>(state => state.profilePage.newPostText)
    const dispatch = useDispatch();


    const postsElements = posts.map(el =>
        <Post key={el.id} message={el.message} likesCount={el.likesCount}/>)

    const addPost = () => {
        dispatch(addPostAC(newPostText));
    }

    const newTextChangeHandler = (e: ChangeEvent<HTMLTextAreaElement> ) => {
        let text = e.currentTarget.value;
        dispatch(changeNewTextAC(text));
    }

    return (
        <div className={s.postsBlock}>
            <h3 className={s.postsTitle}>My posts</h3>
            <div className={s.postWrapper}>
                <div>
                    <textarea
                        onChange={newTextChangeHandler}
                        value={newPostText}
                    />
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
                {/*<button>Remove</button>*/}
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
};




