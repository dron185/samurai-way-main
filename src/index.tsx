import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";

import {store} from './redux/redux-store';
import {Provider} from "react-redux";

const rerenderEntireTree = (/*state: ReducersStateType*/) => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                 <App/>
            </Provider>
        </BrowserRouter>,
        document.getElementById('root')
    );
}

rerenderEntireTree(/*store.getState()*/);

store.subscribe(()=>{
    /*let state = store.getState();
    console.log(state)*/
    rerenderEntireTree(/*state*/);
});

