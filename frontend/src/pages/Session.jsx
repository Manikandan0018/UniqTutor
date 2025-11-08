import React, { useRef } from "react";

// Base button classes for a modern, flat look
const baseButtonClasses =
  "px-4 py-2 text-sm font-medium rounded-full transition duration-150 ease-in-out shadow-md";

export default function VideoPlayer({ src }) {
  const videoRef = useRef();

  return (
    <div className="max-w-4xl mx-auto mt-4">
      <video
        ref={videoRef}
        src={src}
        controls
        className="w-full rounded-xl shadow-2xl border border-gray-200"
      />
      <div className="mt-4 p-3 bg-gray-100 rounded-lg flex flex-wrap justify-center gap-3 shadow-inner">
        {/* Play Button (Primary Color) */}
        <button
          onClick={() => videoRef.current.play()}
          className={`${baseButtonClasses} bg-green-500 text-white hover:bg-green-600`}
        >
          ▶️ Play
        </button>

        {/* Pause Button */}
        <button
          onClick={() => videoRef.current.pause()}
          className={`${baseButtonClasses} bg-yellow-500 text-white hover:bg-yellow-600`}
        >
          ⏸️ Pause
        </button>

        {/* Volume Down */}
        <button
          onClick={() =>
            (videoRef.current.volume = Math.max(
              0,
              videoRef.current.volume - 0.1
            ))
          }
          className={`${baseButtonClasses} bg-gray-300 text-gray-800 hover:bg-gray-400`}
        >
          🔉 Volume -
        </button>

        {/* Volume Up */}
        <button
          onClick={() =>
            (videoRef.current.volume = Math.min(
              1,
              videoRef.current.volume + 0.1
            ))
          }
          className={`${baseButtonClasses} bg-gray-300 text-gray-800 hover:bg-gray-400`}
        >
          🔊 Volume +
        </button>

        {/* Fullscreen Button (Secondary Color) */}
        <button
          onClick={() => videoRef.current.requestFullscreen()}
          className={`${baseButtonClasses} bg-indigo-500 text-white hover:bg-indigo-600`}
        >
          ⛶ Fullscreen
        </button>
      </div>
    </div>
  );
}
