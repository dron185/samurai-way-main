import React from 'react';
import './App.css';
import {Navbar} from "./layout/main/navbar/Navbar";
import {Main} from "./layout/main/Main";
import {Footer} from "./layout/footer/Footer";
import {Container} from "./components/container/Container";
import {MainContent} from "./layout/main/mainContent/MainContent";
import HeaderContainer from "./layout/header/HeaderContainer";
import {connect} from "react-redux";
import {initializeAppTC} from "./redux/app-reducer";
import {AppStateType} from "./redux/redux-store";
import {Preloader} from "./components/preloader/Preloader";

type Props = MapDispatchToPropsType & mapStateToPropsType

class App extends React.Component<Props> {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized){
            return <Preloader/>
        }

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
    initializeApp: () => void
}

type mapStateToPropsType = {
    initialized: boolean
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        initialized: state.app.initialized
    }
}

export default connect(mapStateToProps, {initializeApp: initializeAppTC, })(App);

