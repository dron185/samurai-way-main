import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css';
import {Post} from './post/Post'
import {PostType} from "../../../../redux/state";

type MyPostsPropsType = {
    posts: PostType[]
    newPostText: string
    addPostCallback: (postText: string) => void
    // updateNewPostText: (newText: string) => void
    changeNewTextCallback: (newText: string) => void
}

export const MyPosts: React.FC<MyPostsPropsType> = (props) => {
    const postsElements = props.posts.map(el =>
        <Post key={el.id} message={el.message} likesCount={el.likesCount}/>)

    // const newPostElement = React.createRef<HTMLTextAreaElement>();

    const addPost = () => {
        props.addPostCallback(props.newPostText);
    }

    // const onPostChange = () => {
    //     let text = newPostElement.current?.value;
    //     if (text !== undefined) {
    //         props.updateNewPostText(text)
    //     }
    // }

    const newTextChangeHandler = (e: ChangeEvent<HTMLTextAreaElement> ) => {
        let text = e.currentTarget.value;
        props.changeNewTextCallback(text)
    }

    return (
        <div className={s.postsBlock}>
            <h3 className={s.postsTitle}>My posts</h3>
            <div className={s.postWrapper}>
                <div>
                    <textarea
                        // ref={newPostElement}
                        onChange={newTextChangeHandler}
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




