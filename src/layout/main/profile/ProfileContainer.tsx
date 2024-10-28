import React from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {ProfileType, setUserProfileAC} from "../../../redux/profile-reducer";
import {AppStateType} from "../../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {usersAPI} from "../../../api/api";

type MatchParams = {
    userId: string;
}

export class ProfileContainer extends React.Component<ProfileContainerPropsType & RouteComponentProps<MatchParams>> {
    // все сайд-эффекты делаются в методе жизненного цикла - componentDidMount():
    componentDidMount() {
        //console.log(this.props.match.params.userId)
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = '2';
        }
        usersAPI.getProfile(userId).then(response => {
            this.props.setUserProfile(response.data);
        });
    }

    render () {
        //console.log(this.props)
        return <Profile {...this.props} profile={this.props.profile} />
    }
}

type mapStateToPropsType = { profile: ProfileType | null }
type MapDispatchToPropsType = { setUserProfile: (profile: any) => void}
type ProfileContainerPropsType = mapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: AppStateType): mapStateToPropsType  => (
    {
        profile: state.profilePage.profile
    }
)

const WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile: setUserProfileAC})(WithUrlDataContainerComponent)

