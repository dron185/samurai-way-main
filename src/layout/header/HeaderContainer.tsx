import React from 'react';
import {Header} from "./Header";
import {connect} from "react-redux";
import {setAuthUserDataAC} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";
import {authAPI, DataType} from "../../api/api";


class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    componentDidMount() {
        authAPI.me().then(response => {
            if (response.data.resultCode === 0) {
                this.props.setAuthUserData(response.data.data)
            }
        })
    }

    render() {
        return <Header {...this.props}/>
    }
}

type mapStateToPropsType = { isAuth: boolean, login: string }
type MapDispatchToPropsType = {
    setAuthUserData: (data: DataType) => void
}
export type HeaderContainerPropsType = mapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps, {setAuthUserData: setAuthUserDataAC})(HeaderContainer);