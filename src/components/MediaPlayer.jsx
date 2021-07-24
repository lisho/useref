import React, { useRef, useState } from "react";

const MediaPlayer = () => {
  const videoRef = useRef();
  const [playing, setPlaying] = useState(false);

  const handleButon = () => {
    const video = videoRef.current;

    playing ? video.pause() : video.play();
    setPlaying(!playing);
  };
  return (
    <div>
      <h1>MediaPlayer</h1>
      {/* <video src="video/playa.mp4" ref={videoRef}></video> */}
      <video width="90%" ref={videoRef} onClick={handleButon}>
        <source src="video/playa.mp4" type="video/mp4" />
      </video>
      <br /> <br />
      <button onClick={handleButon}>{playing ? "Pause" : "Play"}</button>
    </div>
  );
};

export default MediaPlayer;
