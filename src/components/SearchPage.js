import React from "react";
import "./SearchPage.css";
import TuneIcon from "@mui/icons-material/Tune";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";
function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneIcon></TuneIcon>
        <h2>FILTER</h2>
      </div>
      <hr></hr>
      <ChannelRow
        image="https://upload.wikimedia.org/wikipedia/en/6/65/Kurzgesagt.png"
        channel="Kurzgesagt"
        verified
        subs="16.6M"
        noOfVideos="149"
        description="Videos explaining things with optimistic nihilism. We are a small team who want to make science look beautiful. Because it is beautiful."
      ></ChannelRow>
      <hr></hr>
      <VideoRow
        title="What Dinosaurs ACTUALLY Looked Like?"
        views="6.8M views"
        subs="16.6M"
        timestamp="2 weeks ago"
        description="A great video for climate change enthusiasts"
        channel="Kurzgezagt"
        image="https://img.youtube.com/vi/xaQJbozY_Is/mqdefault.jpg"
      ></VideoRow>
      <VideoRow
        title="The Day the Dinosaurs Died – Minute by Minute"
        views="10M views"
        subs="16.6M"
        timestamp="1 year ago"
        description="DISCOVER ANCIENT WORLDS. Peek into the past and learn about dinosaurs and other amazing creatures"
        channelLogo="https://upload.wikimedia.org/wikipedia/en/6/65/Kurzgesagt.png"
        channel="Kurzgesagt-In a nutshell"
        image="https://i.ytimg.com/vi/dFCbJmgeHmA/maxresdefault.jpg"
      ></VideoRow>
      <VideoRow
       title='Loneliness'
       views='998k views'
       subs='16.6M'
       description='An antidote for Loneliness. Why it is caused, and much more.'
       timestamp='2 days ago'
       channelLogo='https://upload.wikimedia.org/wikipedia/en/6/65/Kurzgesagt.png'
       channel='Kurzgesagt-In a nutshell'
       image='https://i.ytimg.com/vi/n3Xv_g3g-mA/maxresdefault.jpg'
      ></VideoRow>
      <VideoRow
       title='Could Your Phone Hurt You? Electromagnetic Pollution'
       views='8M views'
       subs='16.6M'
       description="It's important to know how your phone is affecting you"
       timestamp='3 months ago'
       channelLogo='https://upload.wikimedia.org/wikipedia/en/6/65/Kurzgesagt.png'
       channel='Kurzgesagt-In a nutshell'
       image='https://i.ytimg.com/vi/FfgT6zx4k3Q/maxresdefault.jpg'
      ></VideoRow>
      <VideoRow
       title='TRUE Limits Of Humanity – The Final Border We Will Never Cross'
       views='5M views'
       description='Will humanity be ever able to cross this border?'
       subs='16.6M'
       timestamp='2 months ago'
       channelLogo='https://upload.wikimedia.org/wikipedia/en/6/65/Kurzgesagt.png'
       channel='Kurzgesaft-In a nutshell'
       image='https://i.ytimg.com/vi/uzkD5SeuwzM/maxresdefault.jpg'
       
      ></VideoRow>
      <VideoRow
       title="This Virus Shouldn't Exist (But it Does)"
       views='8M views'
       subs='16.6M'
       description='Another virus found that could potentially harm the humankind.'
       timestamp='2 months ago'
       channelLogo='https://upload.wikimedia.org/wikipedia/en/6/65/Kurzgesagt.png'
       channel='Kurzgesagt-In a nutshell'
       image='https://i.ytimg.com/vi/1-NxodiGPCU/maxresdefault.jpg'
      ></VideoRow>
      <VideoRow
       title= "Is Reality Real? The Simulation Argument"
       views='7M views'
       subs='16.6M'
       description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
       timestamp='4 weeks ago'
       channelLogo='https://upload.wikimedia.org/wikipedia/en/6/65/Kurzgesagt.png'
       channel='Kurzgesagt-In a nutshell'
       image='https://i.ytimg.com/vi/tlTKTTt47WE/maxresdefault.jpg'
      ></VideoRow>
      <VideoRow
       title='Visualizing the World in 2090'
       views='6M views'
       description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
       subs='16.6M'
       timestamp='3 weeks ago'
       channelLogo='https://upload.wikimedia.org/wikipedia/en/6/65/Kurzgesagt.png'
       channel='Kurzgesagt-In a nutshell'
       image='https://i.ytimg.com/vi/_F4-692nxhU/maxresdefault.jpg'
      ></VideoRow>
      <VideoRow
      title='"What Are You Doing With Your Life? The Tail End'
      views='5M views'
      subs='16.6M'
      description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
      timestamp='1 month ago'
      channelLogo='https://upload.wikimedia.org/wikipedia/en/6/65/Kurzgesagt.png'
      channel='Kurzgesagt-In a nutshell'
      image='https://i.ytimg.com/vi/JXeJANDKwDc/maxresdefault.jpg'
      ></VideoRow>
    </div>
  );
}

export default SearchPage;
