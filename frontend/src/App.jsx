import React from "react";
import { Outlet, Link } from "react-router-dom";
export default function App() {
  return (
    // Main container with global styling: Inter font, light gray background, full height
    <div className="min-h-screen bg-gray-100 font-sans antialiased">
      <header className="bg-white shadow-lg sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          {/* Title / Logo */}
          
          <h1 className="text-3xl font-extrabold text-indigo-700 tracking-tight flex items-center">
            <span className="mr-2 text-4xl">🎥</span> Live Session Platform
          </h1>

        </div>
      </header>

      {/* Content area for Admin or SessionPage */}
      <main className="container mx-auto p-4 sm:p-6 lg:p-8">
        <Outlet />
      </main>
    </div>
  );
}
