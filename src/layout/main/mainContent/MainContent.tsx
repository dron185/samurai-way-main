import React from 'react';
import {Route} from "react-router-dom";
import {Dialogs} from "../dialogs/Dialogs";
import {Profile} from "../profile/Profile";
import {News} from "../news/News";
import {Music} from "../music/Music";
import {Settings} from "../settings/Settings";
import s from './MainContent.module.css'

export const MainContent: React.FC = () => {
    return (
        <div className={s.mainContent}>
            {/*<Route path={'/dialogs'} component={Dialogs}/>*/}
            <Route path={'/dialogs'} render={()=><Dialogs/>}/>
            <Route path={'/profile'} render={()=> <Profile/>}/>
            <Route path={'/news'} component={News}/>
            <Route path={'/music'} component={Music}/>
            <Route path={'/settings'} component={Settings}/>
        </div>
    );
};