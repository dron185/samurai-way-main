import React from 'react';
import './App.css';
import {Navbar} from "./layout/main/navbar/Navbar";
import {Main} from "./layout/main/Main";
import {Footer} from "./layout/footer/Footer";
import {Container} from "./components/container/Container";
import {MainContent} from "./layout/main/mainContent/MainContent";
import HeaderContainer from "./layout/header/HeaderContainer";
import {connect} from "react-redux";
import {getAuthUserDataTC} from "./redux/auth-reducer";

class App extends React.Component<MapDispatchToPropsType> {
    componentDidMount() {
        this.props.getAuthUserData();
    }

    render() {
        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Main>
                    <Container>
                        <Navbar/>
                        <MainContent/>
                    </Container>
                </Main>
                <Footer/>
            </div>
        );
    }
}

type MapDispatchToPropsType = {
    getAuthUserData: () => void
}

export default connect(null, {getAuthUserData: getAuthUserDataTC, })(App);

