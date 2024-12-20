import React, {ComponentType} from 'react';
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {AppStateType} from "../redux/redux-store";

type MapStateProps = {
    isAuth: boolean
}
const mapStateToProps = (state: AppStateType): MapStateProps => ({
    isAuth: state.auth.isAuth
})

export function withAuthRedirect<T>(Component: ComponentType<T>){

    const RedirectComponent = (props: MapStateProps)=> {
        let {isAuth, ...restProps} = props;
        if (!isAuth) return <Redirect to="/login"/>
        return <Component {...restProps as T} />
    }

    let ConnectedRedirectComponent = connect(mapStateToProps)(RedirectComponent)

    return ConnectedRedirectComponent
}