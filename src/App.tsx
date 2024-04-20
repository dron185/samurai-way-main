import React from 'react';
import './App.css';
import {Header} from "./layout/header/Header";
import {Navbar} from "./layout/main/navbar/Navbar";
import {Main} from "./layout/main/Main";
import {Footer} from "./layout/footer/Footer";
import {Container} from "./components/container/Container";
import {MainContent} from "./layout/main/mainContent/MainContent";
import {addMessage, RootStateType, updateNewMessageText} from "./redux/state";

type AppPropsType = {
    state: RootStateType
    addPost: () => void
    updateNewPostText: (newText: string) => void

    addMessage: () => void
    updateNewMessageText: (newText: string) => void
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
                        addPost={props.addPost}
                        updateNewPostText={props.updateNewPostText}

                        addMessage={props.addMessage}
                        updateNewMessageText={props.updateNewMessageText}
                    />
                </Container>
            </Main>
            <Footer/>
        </div>
    );
}

export default App;