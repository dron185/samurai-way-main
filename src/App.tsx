import React from 'react';
import './App.css';
import {Header} from "./layout/header/Header";
import {Navbar} from "./layout/main/navbar/Navbar";
import {Main} from "./layout/main/Main";
import {Footer} from "./layout/footer/Footer";
import {Container} from "./components/container/Container";
import {MainContent} from "./layout/main/mainContent/MainContent";
import {RootStateType, StoreType} from "./redux/state";

type AppPropsType = {
    store: StoreType
    state: RootStateType
}

function App(props: AppPropsType) {
    // const state = props.store.getState();

    return (
        <div className="app-wrapper">
            <Header/>
            <Main>
                <Container>
                    <Navbar friends={props.state.sidebar.friends}/>
                    <MainContent
                        state={props.state}
                        dispatch={props.store.dispatch.bind(props.store)}
                    />
                </Container>
            </Main>
            <Footer/>
        </div>
    );
}

export default App;