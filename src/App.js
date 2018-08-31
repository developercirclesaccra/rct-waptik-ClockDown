import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Timer from './components/Timer';

//icons
import { FaGithubAlt } from 'react-icons/fa';

// global var
    const author_name = "Waptik";
    const github = "https://www.github.com/";
    //const author_url = github + "waptik";


  class App extends Component {

    constructor(){
        super();

        this.state = {
      author_name: "Waptik",
      author_url: github + "waptik",
        };
    }

    render() {
        return (
            <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ClockDown by <a href={this.state.author_url} target="_blank">{author_name}</a><FaGithubAlt /></h1>
        </header>
        <p className="App-intro"></p>
                <div className="mt-5">
                    <Timer />
                </div></div>
        );
    }
}

export default App;