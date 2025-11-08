import React, { useState } from "react";
import VideoPlayer from "../shared/VideoPlayer";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

export default function Admin() {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleStart = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/sessions/create`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message);
      setSession(data.session);
    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 md:p-10 max-w-4xl mx-auto my-10 bg-white rounded-xl shadow-2xl border border-gray-100">
      <h2 className="text-3xl font-extrabold text-gray-800 border-b-4 border-indigo-500 pb-3 mb-6">
        📚 Admin Control Panel
      </h2>

      {!session ? (
        <button
          onClick={handleStart}
          disabled={loading}
          // Dynamic classes for loading state
          className={`
            w-full py-3 text-xl font-semibold rounded-lg shadow-lg transition duration-300 ease-in-out
            ${
              loading
                ? "bg-indigo-300 text-white cursor-not-allowed opacity-80"
                : "bg-indigo-600 hover:bg-indigo-700 text-white transform hover:scale-[1.01]"
            }
          `}
        >
          {loading ? "🚀 Starting Session..." : "START NEW LIVE SESSION"}
        </button>
      ) : (
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-green-600 flex items-center">
            Session Created Successfully!{" "}
            <span className="ml-2 text-3xl">✅</span>
          </h3>

          <div className="p-5 bg-green-50 border-l-4 border-green-400 rounded-lg shadow-md space-y-2">
            <p className="text-gray-700">
              <b className="font-semibold text-green-700">Database ID:</b>{" "}
              {session.id}
            </p>
            <p className="text-gray-700">
              <b className="font-semibold text-green-700">Unique Code:</b>{" "}
              {session.unique_id}
            </p>
            <p className="text-gray-700">
              <b className="font-semibold text-green-700">Student URL:</b>{" "}
              <a
                href={session.userurl}
                target="_blank"
                rel="noreferrer"
                className="text-indigo-600 hover:text-indigo-800 font-medium break-all"
              >
                {session.userurl}
              </a>
            </p>
          </div>

          <div className="mt-8">
            <h4 className="text-xl font-semibold text-gray-700 mb-3">
              Admin Video Preview
            </h4>
            <VideoPlayer src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" />
          </div>
        </div>
      )}
    </div>
  );
}
