import React, { Component } from 'react';
import './App.css';
import AddUser from './containers/AddUser'
import Footer from './components/Footer'
import VisibleTodoList from './containers/VisibleTodoList'

class App extends Component {

  render() {
    return (
      <div className="App" cookies={this.props.cookies}>
      {/* <div className="container">
      <ListUsers></ListUsers>
      <UserInfo></UserInfo>
      </div> */}
      <div className="container">
       <div className="userData">  
      <AddUser></AddUser>
      <VisibleTodoList></VisibleTodoList>
      <Footer />
      </div>
      </div>
      <div>
      {/* <div className="container">
      <MatchHistory></MatchHistory></div> */}
      </div>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
      </div>
    );
  }
}

export default App;
