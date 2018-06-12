import React from "react";
import VideoListItem from "./video_list_item";

const VideoList = props => {
  const { videos, onVideoSelect } = props;

  const videoItems = videos.map(video => {
    return (
      <VideoListItem
        onVideoSelect={onVideoSelect}
        key={video.etag}
        video={video}
      />
    );
  });
  console.log(videos);
  return <ul className="col-md-4 list-group">{videoItems}</ul>;
};

export default VideoList;
