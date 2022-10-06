import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

let postsData = [
    {id: 1, message: 'Good job!', likeCounter: '5'},
    {id: 1, message: "wat's up, men?", likeCounter: '3'},
    {id: 1, message: "yo-yo-yo?", likeCounter: '1'}
]

let dialogsData = [
    {id: 1, name: 'Serega'},
    {id: 2, name: 'Valenta'},
    {id: 3, name: 'Arsenchik'},
    {id: 4, name: 'Davy Johnes'},
    {id: 5, name: 'Sharky'}
]

let messagesData = [
    {id: 1, message: 'Wassssup men?'},
    {id: 1, message: 'How much is the fish?'},
    {id: 1, message: 'Check the microphone!'}
]

const App = () => {
    return (
        <Router>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/profile' element={<Profile postsData={postsData}/>}/>
                        <Route path='/dialogs/*' element={<Dialogs dialogsData={dialogsData} messagesData={messagesData}/>}/>
                        <Route path='/news' element={<News/>}/>
                        <Route path='/music' element={<Music/>}/>
                        <Route path='/settings' element={<Settings/>}/>
                    </Routes>
                </div>
            </div>
        </Router>
    )
        ;
}

export default App;
