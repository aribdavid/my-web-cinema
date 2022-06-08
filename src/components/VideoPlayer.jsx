import React from "react";

export default function VideoPlayer(){
  return(
    <div>
    <video id="videoPlayer" width="650" controls muted="muted" autoplay>
    <source src="http://localhost:3500/movie" type="video/mp4" />
  </video>
    </div>
  )
}