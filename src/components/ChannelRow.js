import React from "react";
import "./ChannelRow.css";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
function ChannelRow({
  image,
  channel,
  subs,
  noOfVideos,
  description,
  verified,
}) {
  return (
    <div className="channelRow">
      <img className="channelRow__logo" src={image} alt="ChannelLogo"></img>
      <div className="channelRow__text">
        <h4>
          {channel} {verified && <CheckCircleOutlineOutlinedIcon />}
        </h4>
        <p>
          {subs} subscribers · {noOfVideos} Videos
        </p>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default ChannelRow;
