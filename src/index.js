import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import './index.css';
import state from './redux/state';
import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom/client';
import App from './App';
import {addPost, updateNewPostText, sendMessage, updateNewMessageText, subscribe} from "./redux/state";

const root = ReactDOM.createRoot(document.getElementById('root'));

export let rerenderEntireTree = () => {
    root.render(
        <Router>
            <React.StrictMode>
                <App state={state}
                     addPost={addPost}
                     updateNewPostText={updateNewPostText}
                     sendMessage={sendMessage}
                     updateNewMessageText={updateNewMessageText}
                />
            </React.StrictMode>
        </Router>
    );
}


rerenderEntireTree();

subscribe(rerenderEntireTree);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
