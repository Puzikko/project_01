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
            <Navbar dialogsData={props.state.dialogsPage.dialogsData}/>
            <div className='app-wrapper-content'>
                <Routes>

                    <Route path='/profile'
                           element={<Profile postsData={props.state.profilePage.postsData}
                                             newPostText={props.state.profilePage.newPostText}
                                             addPost={props.store.addPost.bind(props.store)}
                                             updateNewPostText={props.store.updateNewPostText.bind(props.store)}
                                             />}/>

                    <Route path='/dialogs/*' element={<Dialogs
                        dialogsData={props.state.dialogsPage.dialogsData}
                        messagesData={props.state.dialogsPage.messagesData}
                        newMessageText={props.state.dialogsPage.newMessageText}
                        sendMessage={props.store.sendMessage.bind(props.store)}
                        updateNewMessageText={props.store.updateNewMessageText.bind(props.store)}
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
