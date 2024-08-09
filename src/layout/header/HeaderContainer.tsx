import React from 'react';
import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {setAuthUserDataAC} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";

export type DataType = {
    id: number
    email: string
    login: string
}

type ResponseType = {
    resultCode: number
    messages: string[]
    data: DataType
}

class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    componentDidMount() {
        axios.get<ResponseType>(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
            .then(response => {
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