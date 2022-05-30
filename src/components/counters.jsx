import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 7 },
      { id: 2, value: 8 },
      { id: 3, value: 9 },
      { id: 4, value: 10 },
    ],
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((count) => {
      count.value = 0;
      return count;
    });
    this.setState({ counters: counters });
  };
  handleDelete = (deleteId) => {
    const afterDelete = this.state.counters.filter(
      (counter) => counter.id !== deleteId
    );
    this.setState({ counters: afterDelete });
  };
  render() {
    return (
      <div className="container">
        <button
          className="btn btn-primary btn-sm m-2"
          onClick={this.handleReset}
        >
          Reset
        </button>
        {this.state.counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            counter={counter}
          ></Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
