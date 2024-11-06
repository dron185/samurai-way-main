import React from 'react';
import {Route} from "react-router-dom";
import {News} from "../news/News";
import {Music} from "../music/Music";
import {Settings} from "../settings/Settings";
import s from './MainContent.module.css'
import {DialogsContainer} from "../dialogs/DialogsContainer";
import UsersContainer from "../users/UsersContainer";
import ProfileContainer from "../profile/ProfileContainer";
import {LoginContainer} from "../../../components/Login/Login";

export const MainContent: React.FC = () => {
    return (
        <div className={s.mainContent}>
            {/*<Route path={'/dialogs'} component={Dialogs}/>*/}
            <Route path={'/dialogs'} render={()=><DialogsContainer/>}/>
            <Route path={'/profile/:userId?'} render={()=> <ProfileContainer/>}/>
            <Route path={'/news'} component={News}/>
            <Route path={'/music'} component={Music}/>
            <Route path={'/settings'} component={Settings}/>
            <Route path={'/users'} render={()=><UsersContainer/>}/>
            <Route path={'/login'} render={()=><LoginContainer/>}/>
        </div>
    );
};

