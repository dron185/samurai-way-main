import React from 'react';
import './App.css';
import {Header} from "./layout/header/Header";
import {Navbar} from "./layout/main/navbar/Navbar";
import {Main} from "./layout/main/Main";
import {Footer} from "./layout/footer/Footer";
import {Container} from "./components/container/Container";
import {MainContent} from "./layout/main/mainContent/MainContent";

function App() {
    return (
        <div className="app-wrapper">
            <Header/>
            <Main>
                <Container>
                    <Navbar />
                    <MainContent/>
                </Container>
            </Main>
            <Footer/>
        </div>
    );
}

export default App;

