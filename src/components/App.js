import React from 'react';
import './../styles/App.scss';
import {Route} from "react-router-dom";
import Profile from "./Profile/Profile";
import Header from "./Layouts/Header";
import Navbar from "./Layouts/Navbar";
import DialogsContainer from "./Dialog/DialogsContainer";
import UsersContainer from "./Users/UsersContainer";
//import store from "./../redux-store/redux-store";

function App(props) {
    return (
    <div className="app">
      <Header/>
      <Navbar/>
      <Route path="/profile" render={() => <Profile />}/>
      <Route path="/dialogs" render={() => <DialogsContainer />}/>
      <Route path="/users" render={() => <UsersContainer />} />
    </div>
  );
}

export default App;