import React from 'react';
import {Header} from "./Header";
import {connect} from "react-redux";
import {logoutTC} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";


class HeaderContainer extends React.Component<HeaderContainerPropsType> {


    render() {
        return <Header {...this.props}/>
    }
}

type mapStateToPropsType = { isAuth: boolean, login: string | null }
type MapDispatchToPropsType = {
    logout: () => void
}
export type HeaderContainerPropsType = mapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps, {logout: logoutTC})(HeaderContainer);

