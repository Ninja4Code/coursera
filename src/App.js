import React, { Component } from 'react';
import Main from './components/MainComponent';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);    
  }
  render() {
    return (
      <div className="App">
         <Main />
      </div>
    );
  }
}