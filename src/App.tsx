import React from 'react';
import './App.css';
import {Header} from "./layout/header/Header";
import {Navbar} from "./layout/main/navbar/Navbar";
import {Main} from "./layout/main/Main";
import {Footer} from "./layout/footer/Footer";
import {Container} from "./components/container/Container";
import {MainContent} from "./layout/main/mainContent/MainContent";
import {RootStateType} from "./redux/state";

type AppPropsType = {
    state: RootStateType
    addPostCallback: (postText: string) => void
    changeNewTextCallback: (newText: string) => void
    addMessage: (messageText: string) => void
    changeNewMessageCallback: (newText: string) => void
}

function App(props: AppPropsType) {

    return (
        <div className="app-wrapper">
            <Header/>
            <Main>
                <Container>
                    <Navbar friends={props.state.sidebar.friends}/>
                    <MainContent
                        state={props.state}
                        addPostCallback={props.addPostCallback}
                        changeNewTextCallback={props.changeNewTextCallback}

                        addMessage={props.addMessage}
                        changeNewMessageCallback={props.changeNewMessageCallback}
                    />
                </Container>
            </Main>
            <Footer/>
        </div>
    );
}

export default App;