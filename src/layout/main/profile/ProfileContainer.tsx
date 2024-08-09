import React from 'react';
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {ProfileType, setUserProfileAC} from "../../../redux/profile-reducer";
import {AppStateType, store} from "../../../redux/redux-store";

export class ProfileContainer extends React.Component<ProfileContainerPropsType> {
    // все сайд-эффекты делаются в методе жизненного цикла - componentDidMount():
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                //console.log(store.getState().profilePage)
            this.props.setUserProfile(response.data);

        });
    }

    render () {
        console.log(this.props)
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

export default connect(mapStateToProps, {setUserProfile: setUserProfileAC})(ProfileContainer)

