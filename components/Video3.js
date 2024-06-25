import React from "react";

const VideoPlayer3 = ({ src }) => {
  return (
    <video muted autoPlay loop>
      <source src={"/kumar.mp4"} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default VideoPlayer3;
