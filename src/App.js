import React from 'react';
import './App.css';
import Header from './components/Header';
import Nav from './components/nav';
import Profile from './components/Profile';

const App = () => {
  return (
    <div className='app_wrapper'>
      <Header />
      <Nav />
      <Profile />
    </div>
  );
}


export default App;