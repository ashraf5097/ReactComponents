import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import AddUser from './Component/AddUser';
import AddDynamicEntry from './Component/AddDynamicEntry';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
            Learn React
        </header>
        <main>
            <Route  exact path="/" component={AddUser} />
            <Route path="/home" component={AddDynamicEntry} />
        </main>
      </div>
    );
  }
}

export default App;
