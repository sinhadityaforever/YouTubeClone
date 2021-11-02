import React from "react";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './VideoCard.css'
function VideoCard({ image, title, channel, views, timestamp, channelLogo }) {
  return (
    <div className="videoCard">
      <img src={image}></img>
      <div className="videoCard__info">
        <img className="videoCard__avatar" src={channelLogo}></img>
        <div className="videoCard__text">
          <h4>{title}</h4>
          <p>{channel}</p>
          <p>
            {views} · {timestamp}
          </p>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
