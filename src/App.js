import React from 'react';
import './App.css';
import Profile from './components/Profile/ProfileContainer';
import Dialogs from "./components/Dialogs/DialogsContainer";
import NewsContainer from "./components/News/NewsContainer";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import { Routes, Route } from "react-router-dom";
import NavbarContainer from './components/Navbar/NavbarContainer';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LogIn from './components/LogIn/LogIn';

const App = () => {
    return (
        <div className='app-wrapper'>
            <HeaderContainer />
            <NavbarContainer />
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path='/profile/*' element={<Profile />} >
                        <Route path=':userId' element={<Profile />} />
                    </Route>

                    <Route path='/dialogs/*' element={<Dialogs />} />

                    <Route path='/users' element={<UsersContainer />} />

                    <Route path='/news' element={<NewsContainer />} />
                    <Route path='/music' element={<Music />} />
                    <Route path='/settings' element={<Settings />} />
                    <Route path='/login' element={<LogIn />} />
                </Routes>
            </div>
        </div>
    )
        ;
}

export default App;
