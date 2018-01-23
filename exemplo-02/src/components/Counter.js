import React, { Component } from 'react';
import '../App.css';

class Counter extends Component {
  constructor(props) {
    super(props);

    const { initial } = props; 

    this.state = {
      counter: initial ? initial : 0
    };

    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
  }

  handleIncrement() {
    this.setState({
      counter: this.state.counter+1
    });
  }

  handleDecrement() {
    this.setState({
      counter: this.state.counter-1
    });
  }

  render() {
    const { counter } = this.state;

    return (
      <div className="counter">
        <button onClick={this.handleDecrement}>-1</button>
        <div className="display">{counter}</div>
        <button onClick={this.handleIncrement}>+1</button>
      </div>
    )
  }
}

export default Counter;