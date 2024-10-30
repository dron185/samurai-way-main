import React from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getUserProfileTC, ProfileType} from "../../../redux/profile-reducer";
import {AppStateType} from "../../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
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
    }

    render() {
        return <Profile {...this.props} profile={this.props.profile}/>
    }
}

type mapStateToPropsType = {
    profile: ProfileType | null
}
type MapDispatchToPropsType = {
    getUserProfile: (userId: string) => void
}
type ProfileContainerPropsType = mapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
        profile: state.profilePage.profile,
    })


export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile: getUserProfileTC}),
    withRouter,
    withAuthRedirect,
)(ProfileContainer)


// export default withAuthRedirect(withRouter(connect(mapStateToProps, {getUserProfile: getUserProfileTC})(ProfileContainer)))


// or:

// const WithUrlDataContainerComponent = withRouter(ProfileContainer);
// export default withAuthRedirect(connect(mapStateToProps, {getUserProfile: getUserProfileTC})(WithUrlDataContainerComponent))


// or:

// const AuthRedirectComponent = withAuthRedirect(ProfileContainer)
// const WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);
// export default connect(mapStateToProps, {getUserProfile: getUserProfileTC})(WithUrlDataContainerComponent)
