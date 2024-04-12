import React from 'react';
import s from './MyPosts.module.css';
import {Post} from './post/Post'
import {PostType} from "../../../../redux/state";

type MyPostsPropsType = {
    posts: PostType[]
}

export const MyPosts : React.FC<MyPostsPropsType> = (props) => {
    const postsElements = props.posts.map(el =>
        <Post key={el.id} message={el.message} likesCount={el.likesCount}/>)


    const newPostElement = React.createRef<HTMLTextAreaElement>();

    const addPost = () => {
        // let text = newPostElement.current && newPostElement.current.value;
        let text = newPostElement.current?.value;
        alert(text);
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
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