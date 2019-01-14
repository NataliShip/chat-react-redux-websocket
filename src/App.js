import React, { Component } from 'react';
import Rating from './components/Rating';
import Chat from './components/Chat';
import './scss/app.scss';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Chat/>
        <Rating/>
      </div>
    );
  }
}

export default App;
