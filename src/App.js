import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import initials from './initials.png';
import fish from './koifish.jpg';
import './App.css';
import MuiThemeProvider from '../node_modules/material-ui/styles/MuiThemeProvider';
import Button from './components/button';
import Navbar from './components/navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">David Zhong</h1>
          <Navbar />
        </header>
        <br/>

        <img src={initials} className="initials" alt="initials" />
        <br/>

        <p className="App-intro">
          Welcome to my personal webpage!
        </p>

        <img src={fish} className="Koi-fish" alt="fish" />
        <Button />
      </div>
    );
  }
}

export default App;
