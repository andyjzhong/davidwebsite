import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import initials from './initials.png';
import photo from './photo.png';
import './App.css';
import Button from './components/button';
import Navbar from './components/navbar';

class App extends Component {
  render() {
    return (
      <div>
        <head>

        <script defer src="https://use.fontawesome.com/releases/v5.0.6/js/all.js"></script>
        </head>
        <body>
          <div class="namePlate">
            <img src={photo} class="photo" alt="photo" />
            <h1 class="text-center">David J. Zhong</h1>
            <p class="text-center">Chemical Engineering Student</p>
          </div>

          <ul class="text-center container">
            <li><a href="">About</a></li>
            <li><a href="https://www.linkedin.com/in/david-zhong">LinkedIn</a></li>
            <li><a href="mailto:d.j.zhongbls@gmail.com">Contact</a></li>
          </ul>

          <footer>2018</footer>
        </body>
      </div>
    );
  }
}

export default App;
