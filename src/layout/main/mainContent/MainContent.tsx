import React from 'react';
import {Route} from "react-router-dom";
import {Dialogs} from "../../../components/dialogs/Dialogs";
import {Profile} from "../../../components/profile/Profile";
import {News} from "../../../components/news/News";
import {Music} from "../../../components/music/Music";
import {Settings} from "../../../components/settings/Settings";
import s from './MainContent.module.css'

export const MainContent = () => {
    return (
        <div className={s.mainContent}>
            <Route path={'/dialogs'} component={Dialogs}/>
            <Route path={'/profile'} component={Profile}/>
            <Route path={'/news'} component={News}/>
            <Route path={'/music'} component={Music}/>
            <Route path={'/settings'} component={Settings}/>
        </div>
    );
};