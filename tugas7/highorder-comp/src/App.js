import React, { Component } from 'react';
import './App.css';
import ClickCounter from './Components/ClickCounter';

class App extends Component {

  render() {
    return (
      <div className="App">
        <ClickCounter />
      </div>
    );
  }
}

export default App;
