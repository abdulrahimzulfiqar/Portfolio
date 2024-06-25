import React from 'react';

const VideoPlayer = ({ src }) => {
  return (
    <video  autoPlay  loop >
      <source src={'/mam.mp4'} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default VideoPlayer;
