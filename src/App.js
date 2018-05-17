import React, { Component } from 'react';
// import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Zomtrail</h1>
        </header>
        <input type="file" accept="image/*;capture=camera"></input>
      </div>
    );
  }
}

export default App;
