import React, { Component } from "react";

class App extends Component {
  state = {
    count: 0,
    enableError: false,
  };

  handleIncrement = () => {
    const count = this.state.count + 1;
    this.setState({ count, enableError: false });
  };

  handleDecrement = () => {
    const count = this.state.count - 1;
    if (count < 0) {
      this.setState({ enableError: true });
      return;
    }
    this.setState({ count, enableError: false });
  };

  handleNegativeValues = () => {
    return (
      this.state.enableError && (
        <h1 style={{ color: "red" }} data-test="negative-error">
          Counter value should not be less than 0
        </h1>
      )
    );
  };

  render() {
    return (
      <div data-test="component-app-component">
        <h1 data-test="counter-text">Counter was clicked {this.state.count}</h1>
        {this.handleNegativeValues()}
        <button
          onClick={this.handleDecrement}
          data-test="decrement-btn"
          className="btn"
        >
          Decrement
        </button>
        <button
          onClick={this.handleIncrement}
          data-test="increment-btn"
          className="btn"
        >
          Increment
        </button>
      </div>
    );
  }
}

export default App;
