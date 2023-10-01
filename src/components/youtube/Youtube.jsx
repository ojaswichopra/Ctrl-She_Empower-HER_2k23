import React from 'react';
import YouTube from 'react-youtube';
import './youtube.css'; // Import your CSS file for styling

const Youtube = () => {
  // IDs of the YouTube videos you want to embed
  const videoIds = ['videoId1', 'videoId2'];

  // Options for the YouTube player (you can customize these as needed)
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
       // https://www.youtube.com/watch?v=RMznVg4qo5E
      autoplay: 0,
    },
  };

  return (
    <>
    <div className="ws__features-heading" >
      <h1 className="gradient__text">Here are some self defence vidoes for you !!</h1>

    </div>
    <div className="video-container">
        <div className="video-item">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/9m-x64bKfR4?si=YvzFfOBMyxRANhWk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div className="video-item">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/KVpxP3ZZtAc?si=bSKH_tvqY5-elIWo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>

    </div>
    </>
  );
};

export default Youtube;
