import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import initials from './initials.png';
import photo from './photo.png';
import './App.css';
import MuiThemeProvider from '../node_modules/material-ui/styles/MuiThemeProvider';
import Button from './components/button';
import Navbar from './components/navbar';

class App extends Component {
  render() {
    return (
      <div>
        <head>
        </head>
        <body>
          <Navbar />
          <div class="namePlate">
            <img src={photo} class="photo" alt="photo" />
            <h1 class="text-center">David J. Zhong</h1>
            <p class="text-center">Chemical Engineering Student</p>
          </div>



          <ul class="text-center container">
            <li><a href="">About</a></li>
            <li><a href="">Work</a></li>
            <li><a href="mailto:d.j.zhongbls@gmail.com">Contact</a></li>
          </ul>
          <footer>2018</footer>
        </body>
      </div>
    );
  }
}

export default App;
