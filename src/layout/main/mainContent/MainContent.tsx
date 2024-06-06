import React from 'react';
import {Route} from "react-router-dom";
import {Profile} from "../profile/Profile";
import {News} from "../news/News";
import {Music} from "../music/Music";
import {Settings} from "../settings/Settings";
import s from './MainContent.module.css'
import {NewDialogsContainer} from "../dialogs/NewDialogsContainer";
import UsersContainer from "../users/UsersContainer";

export const MainContent: React.FC = () => {
    return (
        <div className={s.mainContent}>
            {/*<Route path={'/dialogs'} component={Dialogs}/>*/}
            <Route path={'/dialogs'} render={()=><NewDialogsContainer/>}/>
            <Route path={'/profile'} render={()=> <Profile/>}/>
            <Route path={'/news'} component={News}/>
            <Route path={'/music'} component={Music}/>
            <Route path={'/settings'} component={Settings}/>
            <Route path={'/users'} render={()=><UsersContainer/>}/>
        </div>
    );
};