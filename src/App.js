import React, { Suspense } from 'react';
import './App.css';
import Profile from './components/Profile/ProfileContainer';
import Music from "./components/Music/Music";
import SettingsContainer from "./components/Settings/Settings";
import { Routes, Route } from "react-router-dom";
import NavbarContainer from './components/Navbar/NavbarContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LogIn from './components/LogIn/LogIn';
import { connect } from 'react-redux';
import { initializeAppTC, setErrorText, deleteErrorText } from './redux/AppReducer';
import Preloader from './components/common/Preloader/Preloader';
import { getErrorText, getInitialized, getIsError } from './redux/AppSelector';
import { getIsAuth } from './redux/AuthSelector';
import { Popup } from './components/common/PopUp/popUp';
import Footer from './components/Footer/Footer';

const Dialogs = React.lazy(() => import('./components/Dialogs/DialogsContainer')); //Функция React.lazy позволяет рендерить динамический импорт как обычный компонент.
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer')); //Она автоматически загрузит бандл, содержащий OtherComponent, когда этот компонент будет впервые отрендерен.
const NewsContainer = React.lazy(() => import('./components/News/NewsContainer'));
//React.lazy принимает функцию, которая должна вызвать динамический import().
//Результатом возвращённого Promise является модуль, который экспортирует по умолчанию React-компонент (export default).
class App extends React.Component {
    catchAllUnhandledErrors = (reason) => {
        this.props.setErrorText(reason.reason.response?.data.message)
    };
    componentDidMount() {
        this.props.initializeAppTC();
        window.addEventListener('unhandledrejection', this.catchAllUnhandledErrors);
    };
    componentWillUnmount() {
        window.removeEventListener('unhandledrejection', this.catchAllUnhandledErrors)
    };
    render() {
        if (!this.props.initialized) {
            return (
                <div className='app-wrapper'>
                    <HeaderContainer />
                    <NavbarContainer />
                    <div className='app-wrapper-content'> <Preloader /> </div>
                </div>
            )
        }
        return (
            <>
                <div className='app-wrapper'>
                    <HeaderContainer />
                    <NavbarContainer />
                    <div className='app-wrapper-content'>
                        {/* Компонент с ленивой загрузкой должен рендериться внутри компонента Suspense, 
который позволяет нам показать запасное содержимое (например, индикатор загрузки) 
пока происходит загрузка ленивого компонента. */}
                        <Suspense fallback={<Preloader />} >
                            <Routes>
                                <Route path='/profile/*' element={<Profile />} >
                                    <Route path=':userId' element={<Profile />} />
                                </Route>

                                <Route path='/dialogs/*' element={<Dialogs />} />

                                <Route path='/users' element={<UsersContainer />} />

                                <Route path='/news' element={<NewsContainer />} />
                                <Route path='/music' element={<Music />} />
                                <Route path='/settings' element={<SettingsContainer />} />
                                <Route path='/login' element={<LogIn />} />
                            </Routes>
                        </Suspense>
                        {this.props.isError &&
                            <Popup text={this.props.errorText} closePopup={() => this.props.deleteErrorText()} /> /*Всплывашка с ошибкой*/}
                    </div>
                    <div className='app-footer'>
                        <Footer />
                    </div>
                </div>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        initialized: getInitialized(state),
        isAuth: getIsAuth(state),
        errorText: getErrorText(state),
        isError: getIsError(state),
    }
};

export default connect(mapStateToProps, { initializeAppTC, setErrorText, deleteErrorText })(App);
