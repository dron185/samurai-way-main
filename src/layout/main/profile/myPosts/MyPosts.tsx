import React from 'react';
import s from './MyPosts.module.css';
import {Post} from './post/Post'
import {PostType, ProfilePageType} from "../../../../redux/state";

type MyPostsPropsType = {
    posts: PostType[]
    newPostText: string
    addPost: () => void
    updateNewPostText: (newText: string) => void
}

export const MyPosts: React.FC<MyPostsPropsType> = (props) => {
    const postsElements = props.posts.map(el =>
        <Post key={el.id} message={el.message} likesCount={el.likesCount}/>)

    const newPostElement = React.createRef<HTMLTextAreaElement>();

    const addPost = () => {
        props.addPost();
    }

    const onPostChange = () => {
        let text = newPostElement.current?.value;
        if (text !== undefined) {
            props.updateNewPostText(text)
        }
    }

    return (
        <div className={s.postsBlock}>
            <h3 className={s.postsTitle}>My posts</h3>
            <div className={s.postWrapper}>
                <div>
                    <textarea
                        ref={newPostElement}
                        onChange={onPostChange}
                        value={props.newPostText}
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




