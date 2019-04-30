import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserInfo from './components/UserInfo';
import ListUsers from './components/ListUsers';
import MatchHistory from './components/MatchHistory';

class App extends Component {
  render() {
    return (
      <div className="App">
      <div className="container">
      <ListUsers></ListUsers>
      <UserInfo></UserInfo>
      </div>
      <div>
      <div className="container">
      <MatchHistory></MatchHistory></div>
      </div>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
      </div>
    );
  }
}

export default App;
