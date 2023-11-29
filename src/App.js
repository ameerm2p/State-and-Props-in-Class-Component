import React, { Component } from 'react'
import Display from './Display';

 class App extends Component {
  state={
    name:"Ameer"
  }
  render() {
    return (
      <div className="App">
       <Display name={this.state.name}></Display>
      </div>
    );
  }
}

export default App
