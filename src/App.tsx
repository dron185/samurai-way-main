import React from 'react';
import './App.css';
import {Header} from "./layout/header/Header";
import {Navbar} from "./layout/main/navbar/Navbar";
import {Main} from "./layout/main/Main";
import {Footer} from "./layout/footer/Footer";
import {Container} from "./components/container/Container";
import {MainContent} from "./layout/main/mainContent/MainContent";
import {StoreType} from "./redux/state";

type AppPropsType = {
    // state: RootStateType
    // addPostCallback: (postText: string) => void
    // changeNewTextCallback: (newText: string) => void
    // addMessage: (messageText: string) => void
    // changeNewMessageCallback: (newText: string) => void
    store: StoreType
}

function App(props: AppPropsType) {
    const state = props.store.getState();

    return (
        <div className="app-wrapper">
            <Header/>
            <Main>
                <Container>
                    <Navbar friends={state.sidebar.friends}/>
                    <MainContent
                        state={state}
                        dispatch={props.store.dispatch.bind(props.store)}
                        // addPostCallback={props.store.addPost.bind(props.store)}
                        // changeNewTextCallback={props.store.changeNewText.bind(props.store)}
                        // addMessageCallback={props.store.addMessage.bind(props.store)}
                        // changeNewMessageCallback={props.store.changeNewMessage.bind(props.store)}
                    />
                </Container>
            </Main>
            <Footer/>
        </div>
    );
}

export default App;