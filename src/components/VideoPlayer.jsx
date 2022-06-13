import React from "react";

export default function VideoPlayer(){
  return(
    <div>
    <video id="videoPlayer" width="650" controls='controls' muted="muted" autoplay>
    <source src="http://localhost:3500/movie" type="video/mp4" />
    <track label="Español" kind="subtitles" srclang="es" src="REV_TRANSCRIPTION_FINAL.es.vtt"></track>
    <track label="English" kind="subtitles" srclang="en-us" src="./src/components/rashomonen.en-us.vtt" />
  </video>
    </div>
  )
}