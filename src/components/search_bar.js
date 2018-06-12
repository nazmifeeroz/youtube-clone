import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: "" };
  }

  render() {
    const onInputChange = term => {
      this.setState({ term });
      this.props.onSearchTermChange(term);
    };

    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={event => onInputChange(event.target.value)}
        />
      </div>
    );
  }
}

export default SearchBar;
