import store, {RootStateType} from "./redux/state";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";

export const rerenderEntireTree = (state: RootStateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                store={store}
                // state={state}
                // addPostCallback={addPost}
                // changeNewTextCallback={changeNewText}
                // addMessage={addMessage}
                // changeNewMessageCallback={changeNewMessage}
            />
        </BrowserRouter>,
        document.getElementById('root')
    );
}

store.subscribe(rerenderEntireTree);
rerenderEntireTree(store.getState());