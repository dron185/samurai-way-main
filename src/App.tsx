import React from 'react';
import './App.css';
import {Header} from "./layout/header/Header";
import {Navbar} from "./layout/main/navbar/Navbar";
import {BrowserRouter} from "react-router-dom";
import {Main} from "./layout/main/Main";
import {Footer} from "./layout/footer/Footer";
import {Container} from "./components/container/Container";
import {MainContent} from "./layout/main/mainContent/MainContent";
import {RootStateType} from "./redux/state";

type AppPropsType = {
    state: RootStateType
}

function App(props: AppPropsType) {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Main>
                    <Container>
                        <Navbar/>
                        <MainContent state={props.state}
                            // posts={props.state.profilePage.posts}
                            // dialogs={props.state.dialogsPage.dialogs}
                            // messages={props.state.dialogsPage.messages}
                        />
                    </Container>
                </Main>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;