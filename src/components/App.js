import React from 'react';
import './../styles/App.scss';
import {Route} from "react-router-dom";
import Navbar from "./Layouts/Navbar";
import DialogsContainer from "./Dialog/DialogsContainer";
import UsersContainer from "./Users/UsersContainer";
import ProfileContainer from "./Profile/ProfileContainer";
import HeaderContainer from "./Layouts/HeaderContainer";
import Login from "./Login/Login";

function App() {
    return (
    <div className="app">
      <HeaderContainer/>
      <Navbar/>
      <Route path="/profile/:userId?" render={() => <ProfileContainer />}/>
      <Route path="/dialogs" render={() => <DialogsContainer />}/>
      <Route path="/users" render={() => <UsersContainer />} />
      <Route path="/login" render={() => <Login/>} />
    </div>
  );
}

export default App;