import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import Settings from "./components/Settings/Settings";
import {BrowserRouter, Route} from 'react-router-dom';
import Music from "./components/Music/Dialogs";
import News from "./components/News/News";
import Friends from "./components/Friends/Friends";

const App = (props) => {
    return  (
        <BrowserRouter>
            <div className='app_wrapper'>
                <Header/>
                <Navbar state={props.state.friendsPage}/>
                <div className='app_wrapper__content'>
                    <Route path='/profile' render={() => <Profile profilePage={props.state.profilePage}
                                                                  updateTextPost={props.updateTextPost}
                                                                  addPost={props.addPost}/>}/>
                    <Route path='/messages'
                           render={() => <Dialogs DialogsData={props.state.MessagePage.DialogsData}
                                                  MessageData={props.state.MessagePage.MessageData}
                                                  updateTextMessage={props.updateTextMessage}
                                                  addMessage={props.addMessage}/>}/>
                    <Route path='/settings' component={Settings}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/news' component={News}/>
                    <Route path='/friends'
                           render={() => <Friends state={props.state.friendsPage.FriendsData}/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;