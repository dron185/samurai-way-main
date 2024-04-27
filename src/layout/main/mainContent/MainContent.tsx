import React from 'react';
import {Route} from "react-router-dom";
import {Dialogs} from "../dialogs/Dialogs";
import {Profile} from "../profile/Profile";
import {News} from "../news/News";
import {Music} from "../music/Music";
import {Settings} from "../settings/Settings";
import s from './MainContent.module.css'
import {ActionsType, RootStateType} from "../../../redux/state";

type MainContentPropsType = {
    state: RootStateType
    dispatch: (action: ActionsType) => void
}

export const MainContent: React.FC<MainContentPropsType> = (props) => {
    return (
        <div className={s.mainContent}>
            {/*<Route path={'/dialogs'} component={Dialogs}/>*/}
            <Route path={'/dialogs'} render={()=><Dialogs
                dialogs={props.state.dialogsPage.dialogs}
                messages={props.state.dialogsPage.messages}
                newMessageText={props.state.dialogsPage.newMessageText}
                dispatch={props.dispatch}
            />}/>
            <Route path={'/profile'} render={()=>
                <Profile
                profilePage={props.state.profilePage}
                dispatch={props.dispatch}
            />}/>
            <Route path={'/news'} component={News}/>
            <Route path={'/music'} component={Music}/>
            <Route path={'/settings'} component={Settings}/>
        </div>
    );
};