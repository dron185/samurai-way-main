import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css';
import {Post} from './post/Post'
import {newPostTextType, PostType} from "../../../../redux/profile-reducer";

type MyPostsPropsType = {
    changeNewText: (text: string) => void
    addNewPost: () => void
    posts: PostType[]
    newPostText: newPostTextType
}

//Презентационные компоненты занимаются отображением UI.

export const MyPosts = ({changeNewText, posts, newPostText, addNewPost} : MyPostsPropsType) => {

    const postsElements = posts.map(el =>
        <Post key={el.id} message={el.message} likesCount={el.likesCount}/>)

    const onAddPost = () => {
        addNewPost();
    }

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement> ) => {
        let text = e.currentTarget.value;
        changeNewText(text)
    }

    return (
        <div className={s.postsBlock}>
            <h3 className={s.postsTitle}>My posts</h3>
            <div className={s.postWrapper}>
                <div>
                    <textarea
                        onChange={onPostChange}
                        value={newPostText}
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




