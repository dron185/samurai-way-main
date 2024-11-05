import React from 'react';
import s from './MyPosts.module.css';
import {Post} from './post/Post'
import {PostType} from "../../../../redux/profile-reducer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

//Презентационные компоненты занимаются отображением UI.

type MyPostsPropsType = {
    posts: PostType[]
    addNewPost: (newPostText: string) => void
}

type FormDataType = { newPostText: string }


const AddNewPostForm = (props: InjectedFormProps<FormDataType>) => {
    return (
        <form className={s.postWrapper} onSubmit={props.handleSubmit}>
            <div>
                <Field
                    component="textarea"
                    name="newPostText"
                />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const AddNewPostFormRedux = reduxForm<FormDataType>({form: "ProfileAddNewPostForm"})(AddNewPostForm)


export const MyPosts = (props : MyPostsPropsType) => {

    const postsElements = props.posts.map(el =>
        <Post key={el.id} message={el.message} likesCount={el.likesCount}/>)


    const onAddPost = (values: FormDataType) => {
        props.addNewPost(values.newPostText)
    }

    return (
        <div className={s.postsBlock}>
            <h3 className={s.postsTitle}>My posts</h3>
            <AddNewPostFormRedux onSubmit={onAddPost}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
};

