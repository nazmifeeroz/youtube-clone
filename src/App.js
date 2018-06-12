import React, { Component } from "react";
import _ from "lodash";
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

    this.videoSearch("makkah");
  }

  videoSearch(term) {
    YTSearch({ key: API_KEY, term: term }, videos =>
      this.setState({ videos: videos, selectedVideo: videos[0] })
    );
  }

  render() {
    const videoSearch = _.debounce(term => {
      this.videoSearch(term);
    }, 300);

    return (
      <div className="container-fluid">
        <SearchBar onSearchTermChange={videoSearch} />
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
