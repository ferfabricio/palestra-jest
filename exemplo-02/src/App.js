import React, { Component } from 'react';
import Counter from './components/Counter';

class App extends Component {
  render() {
    return (
      <div>
        <Counter initial={0} />
      </div>
    );
  }
}

export default App;
