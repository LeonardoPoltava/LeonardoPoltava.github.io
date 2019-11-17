import React from 'react';
import './App.css';
import Header from "./components/Header/Header.jsx";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import Profile from "./components/Profile/Profile.jsx";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from 'react-router-dom';
const App = (props) => {
  return (
      <BrowserRouter>
          <div className="app-wrapper">
              <Header />
              <Sidebar />
              <div className="content">
                  <Route path="/profile/" render={ () => <Profile state={props.state.profilePage} dispatch={props.dispatch} /> } />
                  <Route path="/dialogs/" render={ () => <Dialogs state={props.state.messagesPage} dispatch={props.dispatch} /> } />
              </div>
          </div>
      </BrowserRouter>
  );
}
export default App;
