import React, { Component, startTransition } from "react";
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

  handleDelete = (deleteId) => {
    const afterDelete = this.state.counters.filter(counter => counter.id !== deleteId)
    this.setState({ counters:afterDelete})
  };
  render() {
    return (
      <div>
        {this.state.counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={this.handleDelete}
            counter={counter}
          ></Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
