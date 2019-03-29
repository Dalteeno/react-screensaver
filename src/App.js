import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));
const getWindowWidth = () => Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
const getWindowHeight = () => Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
 
class App extends Component {
  state = {
    position: {},
  };

  constructor(props) {
    super(props);
    this.state = {
      positions: this.randomPosition(),
    };
    this.randomPosition = this.randomPosition.bind(this);
  }

  componentDidMount() {
    this.setState({
      positions: setInterval(this.randomPosition, 1000),
    });
  }
    
  componentWillUnmount() {
    clearInterval(this.positions);
  }

  randomPosition() {
    const left = `${getRandomInt(getWindowWidth())}px`;
    const top = `${getRandomInt(getWindowHeight())}px`;
    // console.log(left, top);
    this.setState({
      positions: {
        left,
        top,
      },
    });
  };
 
  render() {
    

    return (
      <div className="Test-App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" style={this.state.positions}/>
          <p>
            Testfoo
          </p>
          <a
            className="TestApp-link"
            href="https://test.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
