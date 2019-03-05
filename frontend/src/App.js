import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import io from 'socket.io-client';

const socket = io.connect('http://127.0.0.1', { path: '/noom' });

class App extends Component {
  constructor(props) {
    super(props)
    this.subscribeServer((err, data) => {
      console.log("this is data", data)
    });
  }
  subscribeServer(cb) {
    socket.on('message', data => {
      cb(null, data);
    });
  }
  

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
