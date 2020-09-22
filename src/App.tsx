import React from 'react';
import logo from './logo.svg';
import './App.css';
import { quickSort } from './algorithms/recursion/quickSort';
import {noSortedArr} from "./algorithms/mocks";
import { HashAsObject } from './hash';



function App() {
  const hashPassword = new HashAsObject<number>();
  console.log(hashPassword);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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

export default App;
