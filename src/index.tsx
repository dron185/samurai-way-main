import {RootStateType} from "./redux/store";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";

import {store} from './redux/redux-store';

const rerenderEntireTree = (state: RootStateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App store={store} state={state}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
}

rerenderEntireTree(store.getState());

store.subscribe(()=>{
    let state = store.getState();
    rerenderEntireTree(state);
});
