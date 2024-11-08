import React from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getStatusTC, getUserProfileTC, ProfileType, updateStatusTC} from "../../../redux/profile-reducer";
import {AppStateType} from "../../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from "redux";

type MatchParams = {
    userId: string;
}

export class ProfileContainer extends React.Component<ProfileContainerPropsType & RouteComponentProps<MatchParams>> {
    // все сайд-эффекты делаются в методе жизненного цикла - componentDidMount():
    componentDidMount() {
        // userId - который в url
        let userId: number | null = Number(this.props.match.params.userId);
        if (!userId) {
            userId = this.props.authorizedUserId
            if (!userId) {
                this.props.history.push("/login");
            }
        }

        this.props.getUserProfile(userId);
        this.props.getUserStatus(userId);
    }

    render() {
        return <Profile {...this.props}
                        profile={this.props.profile}
                        status={this.props.status}
                        updateStatus={this.props.updateStatus}
        />
    }
}

type mapStateToPropsType = {
    profile: ProfileType | null
    status: string
    authorizedUserId: number | null
    isAuth: boolean
}

type MapDispatchToPropsType = {
    getUserProfile: (userId: number | null) => void
    getUserStatus: (userId: number | null) => void
    updateStatus: (status: string) => void
}

type ProfileContainerPropsType = mapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.id,
    isAuth: state.auth.isAuth
})


export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        getUserProfile: getUserProfileTC,
        getUserStatus: getStatusTC,
        updateStatus: updateStatusTC
    }),
    withRouter,
    //withAuthRedirect,
)(ProfileContainer)

