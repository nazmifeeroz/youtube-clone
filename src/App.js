import React, { Component } from "react";
import YTSearch from "youtube-api-search";
import "./App.css";
import SearchBar from "./components/search_bar";

const API_KEY = "AIzaSyA4cYpjTeh7KY5aB419kMNkPjrge3ZmSus";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    YTSearch({ key: API_KEY, term: "surfboards" }, videos =>
      this.setState({ videos })
    );
  }

  render() {
    return (
      <div className="App">
        <SearchBar />
      </div>
    );
  }
}

export default App;
