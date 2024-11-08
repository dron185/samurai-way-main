import {connect} from "react-redux";
import {AppDispatch, AppStateType} from "../../../redux/redux-store";
import {
    followTC,
    getUsersThunkCreatorTC,
    setCurrentPageAC,
    unfollowTC,
    UsersPageType
} from "../../../redux/users-reducer";
import React from "react";
import {UsersFC} from "./UsersFC";
import {Preloader} from "../../../components/preloader/Preloader";
import {compose} from "redux";

class UsersContainer extends React.Component<UsersContainerPropsType> {
    // все сайд-эффекты делаются в методе жизненного цикла - componentDidMount():
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
        this.props.setCurrentPage(pageNumber);
    }

    render() {

        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <UsersFC
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

type MapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setCurrentPage: (pageNumber: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
}

export type UsersContainerPropsType = UsersPageType & MapDispatchToPropsType

const mapStateToProps = (state: AppStateType): UsersPageType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

const mapDispatchToProps = (dispatch: AppDispatch): MapDispatchToPropsType => {
    return {
        follow: (userId: number) => {
            dispatch(followTC(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unfollowTC(userId))
        },
        setCurrentPage: (pageNumber: number) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        getUsers: (currentPage: number, pageSize: number) => {
            dispatch(getUsersThunkCreatorTC(currentPage, pageSize))
        }
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps))(UsersContainer)

