import React, { useRef } from "react";

export default function VideoPlayer({ src }) {
  const videoRef = useRef();

  return (
    <div style={{ maxWidth: "800px", marginTop: "10px" }}>
      <video
        ref={videoRef}
        src={src}
        controls
        style={{ width: "100%", borderRadius: "10px" }}
      />
      <div style={{ marginTop: 8, display: "flex", gap: 10 }}>
        <button onClick={() => videoRef.current.play()}>▶️ Play</button>
        <button onClick={() => videoRef.current.pause()}>⏸️ Pause</button>
        <button
          onClick={() =>
            (videoRef.current.volume = Math.max(
              0,
              videoRef.current.volume - 0.1
            ))
          }
        >
          🔉 -
        </button>
        <button
          onClick={() =>
            (videoRef.current.volume = Math.min(
              1,
              videoRef.current.volume + 0.1
            ))
          }
        >
          🔊 +
        </button>
        <button onClick={() => videoRef.current.requestFullscreen()}>
          ⛶ Fullscreen
        </button>
      </div>
    </div>
  );
}
