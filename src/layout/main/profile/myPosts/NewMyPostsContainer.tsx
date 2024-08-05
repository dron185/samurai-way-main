import {connect} from "react-redux";
import {MyPosts} from "./MyPosts";
import {
    addPostAC,
    addPostActionType,
    changeNewTextAC,
    changeNewTextActionType,
    PostType
} from "../../../../redux/profile-reducer";
import {AppStateType} from "../../../../redux/redux-store";
import {Dispatch} from "redux";

//Контейнерные компоненты занимаются управлением состоянием и логикой.

type MapStateToPropsType = {
    posts: PostType[]
    newPostText: string
}
type MapDispatchToPropsType = {
    addNewPost: (newPostText: string) => void
    changeNewText: (text: string) => void
}
export type MyPostsPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch: Dispatch<addPostActionType | changeNewTextActionType>): MapDispatchToPropsType => {
    return {
        addNewPost: (newPostText: string) => {
            dispatch(addPostAC(newPostText));
        },
        changeNewText: (text: string) => {
            dispatch(changeNewTextAC(text));
        }
    }
}

export const NewMyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)



