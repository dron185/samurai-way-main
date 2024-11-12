import React, {lazy, Suspense} from 'react';
import {Route} from "react-router-dom";
import {News} from "../news/News";
import {Music} from "../music/Music";
import {Settings} from "../settings/Settings";
import s from './MainContent.module.css'
import UsersContainer from "../users/UsersContainer";
import {LoginContainer} from "../../../components/Login/Login";

const ProfileContainer = lazy(() => import("../profile/ProfileContainer"));
const DialogsContainer = lazy(() => import("../dialogs/DialogsContainer"));

export const MainContent: React.FC = () => {
    return (
        <div className={s.mainContent}>
            {/*<Route path={'/dialogs'} component={DialogsContainer}/>*/}
            <Route path={'/dialogs'} render={() => {
                return <Suspense fallback={<div>Loading...</div>}>
                    <DialogsContainer/>
                </Suspense>
            }}/>
            <Route path={'/profile/:userId?'} render={() => {
                return <Suspense fallback={<div>Loading...</div>}>
                    <ProfileContainer/>
                </Suspense>
            }}/>
            <Route path={'/news'} component={News}/>
            <Route path={'/music'} component={Music}/>
            <Route path={'/settings'} component={Settings}/>
            <Route path={'/users'} render={() => <UsersContainer/>}/>
            <Route path={'/login'} render={() => <LoginContainer/>}/>
        </div>
    );
};

