import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import Admin from "./pages/Admin.jsx";
import SessionPage from "./pages/Session.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Admin />} />
          <Route path="session/:unique_id" element={<SessionPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
