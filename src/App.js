import React, { Component } from "react";
import YTSearch from "youtube-api-search";
import "./App.css";
import SearchBar from "./components/search_bar";
import VideoList from "./components/video_list";
import VideoDetail from "./components/video_detail";

const API_KEY = process.env.REACT_APP_YOUTUBE_API;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [], selectedVideo: null };

    YTSearch({ key: API_KEY, term: "surfboards" }, videos =>
      this.setState({ videos: videos, selectedVideo: videos[0] })
    );
  }

  render() {
    return (
      <div className="App">
        <SearchBar />
        <div className="row">
          <VideoDetail video={this.state.selectedVideo} />
          <VideoList
            onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
            videos={this.state.videos}
          />
        </div>
      </div>
    );
  }
}

export default App;
