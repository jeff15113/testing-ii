import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    stats: {
      balls: 0,
      strikes: 0,
      hits: 0,
      fouls: 0
    }
  };
  render() {
    return (
      <div className="App">
        <p> # of balls: ${this.state.stats.balls} </p>
        <p> # of strikes: ${this.state.stats.strikes} </p>
        <p> # of hits: ${this.state.stats.hits} </p>
        <p> # of fouls: ${this.state.stats.fouls} </p>
      </div>
    );
  }
}

export default App;
