import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Settings from "./components/Settings/Settings";
import {Route} from 'react-router-dom';
import Music from "./components/Music/Dialogs";
import News from "./components/News/News";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {FriendsContainer} from "./components/Friends/FriendsContainer";
import UsersContainer from "./components/Users/UsersContainer";

const App = () => {
    // debugger;
    return  (
            <div className='app_wrapper'>
                <Header/>
                <Navbar />
                <div className='app_wrapper__content'>
                    <Route path='/profile' render={() => <Profile />}/>
                    <Route path='/messages'
                           render={() => <DialogsContainer/>}/>
                    <Route path='/settings' component={Settings}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/news' component={News}/>
                    <Route path='/friends'
                           render={() => <FriendsContainer />}/>
                    <Route path='/users'
                           render={() => <UsersContainer />}/>
                </div>
            </div>
    );
}

export default App;