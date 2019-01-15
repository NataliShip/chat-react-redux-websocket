import React, { Component } from 'react';
import Chat from './containers/Chat';
import './scss/app.scss';
import Sidebar from "./containers/Sidebar";
import NewMessage from "./containers/NewMessage";

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className='app__chatbox'>
          <Chat/>
          <NewMessage/>
        </div>
        <Sidebar/>
      </div>
    );
  }
}

export default App;
