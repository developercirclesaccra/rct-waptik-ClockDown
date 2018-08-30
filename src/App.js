import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Classroom from './components/classroom/Classroom';

class CountDown extends Component {
  
}

class App extends Component {

  state = {
      survey:[
        
      ],
      students: [
        {
          name: "Stephane",
          age: 22,
  }
      ]
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

      <div className="classroom">
          <Classroom students={this.state.students} />
      </div>

      </div>
    );
  }
}

export default App;
