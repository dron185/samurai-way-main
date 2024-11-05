import {connect} from "react-redux";
import {MyPosts} from "./MyPosts";
import {
    addPostAC,
    addPostActionType,
    PostType
} from "../../../../redux/profile-reducer";
import {AppStateType} from "../../../../redux/redux-store";
import {Dispatch} from "redux";

//Контейнерные компоненты занимаются управлением состоянием и логикой.

type MapStateToPropsType = {
    posts: PostType[]
}
type MapDispatchToPropsType = {
    addNewPost: (newPostText: string) => void
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
    }
}

const mapDispatchToProps = (dispatch: Dispatch<addPostActionType>): MapDispatchToPropsType => {
    return {
        addNewPost: (newPostText: string) => {
            dispatch(addPostAC(newPostText));
        },
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)



