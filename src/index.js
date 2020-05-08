import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let PostData =
    [
        {postMessage: 'My firs post', id: '1', likesCounter: '11'},
        {postMessage: 'My second post', id: '2', likesCounter: '22'},
        {postMessage: 'My third post', id: '3', likesCounter: '33'},
        {postMessage: 'My third post', id: '4', likesCounter: '44'},
        {postMessage: 'My third post', id: '5', likesCounter: '66'},
        {postMessage: 'My third post', id: '6', likesCounter: '66'},
        {postMessage: 'My third post', id: '7', likesCounter: '77'},
        {postMessage: 'My third post', id: '8', likesCounter: '88'},
    ]

ReactDOM.render(
  <React.StrictMode>
    <App postData={PostData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
