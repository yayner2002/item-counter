import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value,
  };

  // renderTags() {
  //   if (this.state.tags.length === 0) return <p>Please Add Your Tags</p>;
  //   return (
  //     <ul>
  //       {this.state.tags.map((tag) => (
  //         <li key={tag}>{tag}</li>
  //       ))}
  //     </ul>
  //   );
  // }
  handleIncrement = (id) => {
    this.setState({ value: this.state.value + 1 });
  };

  render() {
    return (
      <div className="container">
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrement({ id: 1 })}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button className="btn btn-danger btn-sm m-2" onClick={this.props.onDelete}>Delete</button>
        {/* {this.state.tags.length === 0 && "No Tags to Show"}
        {this.renderTags()} */}
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
