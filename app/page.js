"use client";
import React, { useEffect, useRef } from "react";

function Page() {
  const playerRef = useRef(null);

  useEffect(() => {
    // Load the YouTube Player API script
    const script = document.createElement("script");
    script.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(script);

    // Initialize the YouTube Player when the API is ready
    window.onYouTubeIframeAPIReady = () => {
      playerRef.current = new window.YT.Player("youtube-player", {
        videoId: "J---aiyznGQ",
        playerVars: {
          autoplay: 1,
          autohide: 1,
          controls: 0,
          modestbranding: 1,
          loop: 1,
          playlist: "J---aiyznGQ",
          enablejsapi: 1,
          origin: window.location.origin,
        },
        events: {
          onReady: onPlayerReady,
        },
      });
    };

    // Clean up
    return () => {
      document.body.removeChild(script);
      window.onYouTubeIframeAPIReady = null;
    };
  }, []);

  // When the player is ready, start playback
  const onPlayerReady = (event) => {
    event.target.playVideo();
  };

  return (
    <div>
    <div className="overflow-hidden">
            <marquee behavior="scroll" direction="left" scrollamount="8" >
                <h1 className="text-[19px]">
                    🎉 <span className="text-[#9A391D] text-[20px] font-bold"> Admission Open </span> for the coming <span className="text-[#9A391D] text-[20px] font-bold">2024-25</span> session 🎉
                </h1>
            </marquee>
        </div>
     
      <div
        id="youtube-player"
        style={{ width: "560px", height: "315px", margin: "2px auto" }}
      ></div>
      
    </div>
  );
}

export default Page;
