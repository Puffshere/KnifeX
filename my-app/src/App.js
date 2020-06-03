import React from 'react';
import logo from './logo.svg';
import './App.css';
import Input from './Input';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src='Knife.png' className="App-logo" alt="logo" />
        <Input />
        <br></br>
        <a
          className="App-link"
          href="https://shawncurtistaylor@hotmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact Me
        </a>
      </header>
    </div>
  );
}

export default App;
