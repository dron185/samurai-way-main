import React from 'react';
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {setUserProfile} from "../../../redux/profile-reducer";

export class ProfileContainer extends React.Component<any> {
    // все сайд-эффекты делаются в методе жизненного цикла - componentDidMount():
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
            console.log(response.data)
            this.props.setUserProfile(response.data.profile);
        });
    }

    render () {
        return <Profile {...this.props} />
    }
}

const mapStateToProps = (state: any) => (
    {
        profile: state.profilePage.profile
       // a: 13
    }
)

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer)