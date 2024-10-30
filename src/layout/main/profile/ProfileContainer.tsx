import React from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getStatusTC, getUserProfileTC, ProfileType} from "../../../redux/profile-reducer";
import {AppStateType} from "../../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from "redux";

type MatchParams = {
    userId: string;
}

export class ProfileContainer extends React.Component<ProfileContainerPropsType & RouteComponentProps<MatchParams>> {
    // все сайд-эффекты делаются в методе жизненного цикла - componentDidMount():
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = '2';
        }

        this.props.getUserProfile(userId);
        this.props.getUserStatus(userId);
        console.log(this.props.status)
    }

    render() {
        return <Profile {...this.props} profile={this.props.profile}/>
    }
}

type mapStateToPropsType = {
    profile: ProfileType | null
    status: string
}

type MapDispatchToPropsType = {
    getUserProfile: (userId: string) => void
    getUserStatus: (userId: string) => void
}

type ProfileContainerPropsType = mapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
        profile: state.profilePage.profile,
        status: state.profilePage.status
    })


export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile: getUserProfileTC, getUserStatus: getStatusTC}),
    withRouter,
    //withAuthRedirect,
)(ProfileContainer)

