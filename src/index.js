import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import './index.css';
import store from './redux/state';
import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

export let rerenderEntireTree = () => {
    root.render(
        <Router>
            <React.StrictMode>
                <App store={store}
                     state={store.getState()}/>
            </React.StrictMode>
        </Router>
    );
}


rerenderEntireTree();

store.subscribe(rerenderEntireTree);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
