import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: ["Tag 1", "Tag 2", "Tag 3", "Tag 4"],
  };

  render() {
    return (
      <div className="container">
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm">Increment</button>
        <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
