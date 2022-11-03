import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {Routes, Route} from "react-router-dom";

const App = (props) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar dialogsData={props.store.state.dialogsPage.dialogsData}/>
            <div className='app-wrapper-content'>
                <Routes>

                    <Route path='/profile'
                           element={<Profile postsData={props.store.state.profilePage.postsData}
                                             newPostText={props.store.state.profilePage.newPostText}
                                             addPost={props.store.addPost}
                                             updateNewPostText={props.store.updateNewPostText}
                                             />}/>

                    <Route path='/dialogs/*' element={<Dialogs
                        dialogsData={props.store.state.dialogsPage.dialogsData}
                        messagesData={props.store.state.dialogsPage.messagesData}
                        newMessageText={props.store.state.dialogsPage.newMessageText}
                        sendMessage={props.store.sendMessage}
                        updateNewMessageText={props.store.updateNewMessageText}
                        />}/>
                    <Route path='/news' element={<News/>}/>
                    <Route path='/music' element={<Music/>}/>
                    <Route path='/settings' element={<Settings/>}/>
                </Routes>
            </div>
        </div>
    )
        ;
}

export default App;
