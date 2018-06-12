import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: "" };
  }

  render() {
    const { term } = this.state;

    const onInputChange = event => {
      this.setState({ term: event.target.value });
    };

    return (
      <div className="search-bar">
        <input value={term} onChange={onInputChange} />
      </div>
    );
  }
}

export default SearchBar;
