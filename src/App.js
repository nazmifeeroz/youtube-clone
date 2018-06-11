import React, { Component } from "react";
import YTSearch from "youtube-api-search";
import "./App.css";
import SearchBar from "./components/search_bar";

const API_KEY = process.env.YOUTUBE_API_KEY;

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
