import React, { Component } from 'react';
import Header from './components/Header';
import Dashboard from './components/Dashboard/Dashboard';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Dashboard />
      </div>
    );
  }
}

export default App;
