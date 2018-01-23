import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };

    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
  }

  handleIncrement() {
    console.log('increment');
    this.setState({
      counter: this.state.counter+1
    });
  }

  handleDecrement() {
    console.log('decrement');
    this.setState({
      counter: this.state.counter-1
    });
  }

  render() {
    const { counter } = this.state;
    return (
      <div className="app">
        <button onClick={this.handleDecrement}>-1</button>
        <div className="display">{counter}</div>
        <button onClick={this.handleIncrement}>+1</button>
      </div>
    );
  }
}

export default App;
