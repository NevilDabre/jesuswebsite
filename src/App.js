import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import MenuBar from './components/menubar/menubar';
import MenuWithDrawer from './components/MenuWithDrawer/MenuWithDrawer';

class App extends Component {
  render() {
    return (
      <div className="App">
      <MenuWithDrawer></MenuWithDrawer>
      </div>
    );
  }
}

export default App;
