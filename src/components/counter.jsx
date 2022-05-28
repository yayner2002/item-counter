import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: ["Tag 1", "Tag 2", "Tag 3", "Tag 4"],
  };

  renderTags() {
    if (this.state.tags.length === 0) return <p>No Tags to Display</p>;
    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  render() {
    return <div className="container">{this.renderTags()}</div>;
  }
}

export default Counter;
