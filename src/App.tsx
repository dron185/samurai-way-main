import React from 'react';
import './App.css';
import {Header} from "./layout/header/Header";
import {Navbar} from "./layout/main/navbar/Navbar";
import {BrowserRouter} from "react-router-dom";
import {Main} from "./layout/main/Main";
import {Footer} from "./layout/footer/Footer";
import {Container} from "./components/container/Container";
import {MainContent} from "./layout/main/mainContent/MainContent";

function App() {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Main>
                    <Container>
                        <Navbar/>
                        <MainContent/>
                    </Container>
                </Main>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;