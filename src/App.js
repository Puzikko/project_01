import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import { Routes, Route } from "react-router-dom";

const App = (props) => {
    debugger
    return (
        <div className='app-wrapper'>
            <Header />
            <Navbar dialogsData={props.store.getState().dialogsPage.dialogsData} />
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path='/profile'
                        element={<Profile />} />

                    <Route path='/dialogs/*' element={<Dialogs
                    // dialogsPage={props.store.getState().dialogsPage}
                    // dispatch={props.store.dispatch.bind(props.store)}
                    />} />

                    <Route path='/news' element={<News />} />
                    <Route path='/music' element={<Music />} />
                    <Route path='/settings' element={<Settings />} />
                </Routes>
            </div>
        </div>
    )
        ;
}

export default App;
