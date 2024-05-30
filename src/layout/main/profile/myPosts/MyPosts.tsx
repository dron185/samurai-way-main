import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css';
import {Post} from './post/Post'
import {MyPostsPropsType} from "./NewMyPostsContainer";

//Презентационные компоненты занимаются отображением UI.

export const MyPosts = (props : MyPostsPropsType) => {

    const postsElements = props.posts.map(el =>
        <Post key={el.id} message={el.message} likesCount={el.likesCount}/>)

    const onAddPost = () => {
        props.addNewPost(props.newPostText);
    }

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement> ) => {
        let text = e.currentTarget.value;
        props.changeNewText(text)
    }

    return (
        <div className={s.postsBlock}>
            <h3 className={s.postsTitle}>My posts</h3>
            <div className={s.postWrapper}>
                <div>
                    <textarea
                        onChange={onPostChange}
                        value={props.newPostText}
                    />
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
                {/*<button>Remove</button>*/}
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
};




