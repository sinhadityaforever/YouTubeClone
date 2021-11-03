import React from "react";
import "./RecommendedVideos.css";
import VideoCard from "./VideoCard";
function RecommendedVideos() {
  return (
    <div className="recommendedVideos">
      <h2>Recommended</h2>
      <div className="recommendedVideos__videos">
        <VideoCard
          title="What Dinosaurs ACTUALLY Looked Like?"
          views="6.8M views"
          timestamp="2 weeks ago"
          channelLogo="https://upload.wikimedia.org/wikipedia/en/6/65/Kurzgesagt.png"
          channel="Kurzgesagt-In a nutshell"
          image="https://img.youtube.com/vi/xaQJbozY_Is/mqdefault.jpg"
        ></VideoCard>
        <VideoCard
        title="You Are Immune Against Every Disease"
        views='1.8M views'
        timestamp='1 week ago'
        channelLogo='https://upload.wikimedia.org/wikipedia/en/6/65/Kurzgesagt.png'
        channel='Kurzgesagt- In a nutshell'
        image='https://i.ytimg.com/vi/LmpuerlbJu0/maxresdefault.jpg'
        >

        </VideoCard>
        <VideoCard
        title='"What Are You Doing With Your Life? The Tail End'
        views='5M views'
        timestamp='1 month ago'
        channelLogo='https://upload.wikimedia.org/wikipedia/en/6/65/Kurzgesagt.png'
        channel='Kurzgesagt-In a nutshell'
        image='https://i.ytimg.com/vi/JXeJANDKwDc/maxresdefault.jpg'
        >

        </VideoCard>
        <VideoCard
        title='Visualizing the World in 2090'
        views='6M views'
        timestamp='3 weeks ago'
        channelLogo='https://upload.wikimedia.org/wikipedia/en/6/65/Kurzgesagt.png'
        channel='Kurzgesagt-In a nutshell'
        image='https://i.ytimg.com/vi/_F4-692nxhU/maxresdefault.jpg'
        >

        </VideoCard>
        <VideoCard
        title= "Is Reality Real? The Simulation Argument"
        views='7M views'
        timestamp='4 weeks ago'
        channelLogo='https://upload.wikimedia.org/wikipedia/en/6/65/Kurzgesagt.png'
        channel='Kurzgesagt-In a nutshell'
        image='https://i.ytimg.com/vi/tlTKTTt47WE/maxresdefault.jpg'
        >

        </VideoCard>
        <VideoCard
        title="This Virus Shouldn't Exist (But it Does)"
        views='8M views'
        timestamp='2 months ago'
        channelLogo='https://upload.wikimedia.org/wikipedia/en/6/65/Kurzgesagt.png'
        channel='Kurzgesagt-In a nutshell'
        image='https://i.ytimg.com/vi/1-NxodiGPCU/maxresdefault.jpg'
        >

        </VideoCard>
        <VideoCard
        title='TRUE Limits Of Humanity – The Final Border We Will Never Cross'
        views='5M views'
        timestamp='2 months ago'
        channelLogo='https://upload.wikimedia.org/wikipedia/en/6/65/Kurzgesagt.png'
        channel='Kurzgesaft-In a nutshell'
        image='https://i.ytimg.com/vi/uzkD5SeuwzM/maxresdefault.jpg'
        >

        </VideoCard>
        <VideoCard
        title='Could Your Phone Hurt You? Electromagnetic Pollution'
        views='8M views'
        timestamp='3 months ago'
        channelLogo='https://upload.wikimedia.org/wikipedia/en/6/65/Kurzgesagt.png'
        channel='Kurzgesagt-In a nutshell'
        image='https://i.ytimg.com/vi/FfgT6zx4k3Q/maxresdefault.jpg'
        >

        </VideoCard>
        <VideoCard
        title='Loneliness'
        views='998k views'
        timestamp='2 days ago'
        channelLogo='https://upload.wikimedia.org/wikipedia/en/6/65/Kurzgesagt.png'
        channel='Kurzgesagt-In a nutshell'
        image='https://i.ytimg.com/vi/n3Xv_g3g-mA/maxresdefault.jpg'
        >

        </VideoCard>
        <VideoCard
        title='The Day the Dinosaurs Died – Minute by Minute'
        views='10M views'
        timestamp='1 year ago'
        channelLogo='https://upload.wikimedia.org/wikipedia/en/6/65/Kurzgesagt.png'
        channel='Kurzgesagt-In a nutshell'
        image='https://i.ytimg.com/vi/dFCbJmgeHmA/maxresdefault.jpg'
        >

        </VideoCard>

      </div>
    </div>
  );
}

export default RecommendedVideos;
