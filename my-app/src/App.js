import React from 'react';
import './App.css';
import Input from './Input';
import Login from './Login';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Login />
        <img src='Knife.png' className="App-logo" alt="logo" />
        {/* <Input /> */}
        <h1 className='titleEffects'>Welcome to KnifeX</h1>
        <br></br>
        {/* <a
          className="App-link"
          href="https://shawncurtistaylor@hotmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact Me
        </a> */}
      </header>
    </div>
  );
}

export default App;
