import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserInfo from './components/UserInfo';
import ListUsers from './components/ListUsers';

class App extends Component {
  render() {
    return (
      <div className="App">
      <div className="container">
      <ListUsers></ListUsers>
      <UserInfo></UserInfo>
      </div>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
      </div>
    );
  }
}

export default App;
