import React from 'react';

const VideoCard = ({ title, icon_uri }) => {
  return (
    <div className="card">
      <img src={icon_uri} alt={title} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
      </div>
    </div>
  );
};

const VideosList = ({ videos }) => {
  return (
    <div className="video-list">
        {videos.map((videos) => (
          <div key={videos.id} className="video-cards">
            <VideoCard
              title={videos.name}
              icon_uri={videos.icon_uri}
            />
          </div>
        ))}
    </div>
  );
};


export default VideosList;