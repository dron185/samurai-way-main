import React from 'react';
import {Route} from "react-router-dom";
import {Dialogs} from "../dialogs/Dialogs";
import {Profile} from "../profile/Profile";
import {News} from "../news/News";
import {Music} from "../music/Music";
import {Settings} from "../settings/Settings";
import s from './MainContent.module.css'
import {DialogType, MessageType, PostType} from "../../../redux/state";

type MainContentPropsType = {
    posts: PostType[]
    dialogs: DialogType[]
    messages: MessageType[]
}

export const MainContent: React.FC<MainContentPropsType> = (props) => {
    return (
        <div className={s.mainContent}>
            {/*<Route path={'/dialogs'} component={Dialogs}/>*/}
            <Route path={'/dialogs'} render={()=><Dialogs
                dialogs={props.dialogs}
                messages={props.messages}
            />}/>
            <Route path={'/profile'} render={()=><Profile posts={props.posts}/>}/>
            <Route path={'/news'} component={News}/>
            <Route path={'/music'} component={Music}/>
            <Route path={'/settings'} component={Settings}/>
        </div>
    );
};