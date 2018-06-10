import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: "" };
  }

  render() {
    const onInputChange = event => {
      this.setState({ term: event.target.value });
    };

    return (
      <div>
        <p>Input: {this.state.term}</p>
        <input value={this.state.term} onChange={onInputChange} />
      </div>
    );
  }
}

export default SearchBar;
