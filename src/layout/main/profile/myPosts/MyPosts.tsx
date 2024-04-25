import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css';
import {Post} from './post/Post'
import {ActionsType, PostType} from "../../../../redux/state";

type MyPostsPropsType = {
    posts: PostType[]
    newPostText: string
    // updateNewPostText: (newText: string) => void

    // addPostCallback: (postText: string) => void
    // changeNewTextCallback: (newText: string) => void
    dispatch: (action: ActionsType) => void
}

export const MyPosts: React.FC<MyPostsPropsType> = (props) => {
    const postsElements = props.posts.map(el =>
        <Post key={el.id} message={el.message} likesCount={el.likesCount}/>)

    // const newPostElement = React.createRef<HTMLTextAreaElement>();

    const addPost = () => {
        // props.addPostCallback(props.newPostText);
        let action: ActionsType = {type: 'ADD-POST', postText: props.newPostText};
        props.dispatch(action);
    }

    // const onPostChange = () => {
    //     let text = newPostElement.current?.value;
    //     if (text !== undefined) {
    //         props.updateNewPostText(text)
    //     }
    // }

    const newTextChangeHandler = (e: ChangeEvent<HTMLTextAreaElement> ) => {
        let text = e.currentTarget.value;
        // props.changeNewTextCallback(text)
        props.dispatch({type: "CHANGE-NEW-TEXT", newText: text});
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




