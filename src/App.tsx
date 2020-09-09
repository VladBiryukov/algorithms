import React from 'react';
import logo from './logo.svg';
import './App.css';
import {sortSelect} from "./algoruthms/sortSelect";
import {binarySearch} from "./algoruthms/binarySearch";
import {sumTo, getSumValue} from "./algoruthms/recursion";

const noSortedArr = [1,7,2,0,3,5,11,22,12,24,23,26,25,27,26]
const sortedArray = [0, 1, 2, 3, 5, 7, 11, 12, 22, 23, 24, 25, 26, 26, 27]
let obj = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};
function App() {
  // console.log(binarySearch(sortedArray, 25))
    console.log(getSumValue(obj))
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
