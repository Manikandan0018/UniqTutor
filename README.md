# UniQ Tutor — Live Session (Full Stack Developer Task)

> MERN (MongoDB, Express, React + Vite, Node) implementation for the Live Session task.
> Admin can start a session (creates DB record). Students join using the session URL and see the same video player with full controls.

---

## Live demo
- Frontend (Vercel): https://uniq-tutor.vercel.app  
- Backend (Render): https://uniqtutor-1.onrender.com  
- GitHub: https://github.com/Manikandan0018/UniqTutor

> If the demo is slow on first load, the Render service may be waking from idle—wait ~10–20s and retry.

---

## Features
- `live_sessions` collection with fields:
  - `id` (auto-increment)
  - `type` (`admin` / `student`)
  - `unique_id` (UUID)
  - `userurl` (full session URL)
- Admin page (`/`) has **START SESSION** button:
  - Creates session record in MongoDB: `type = "admin"`, `unique_id = uuidv4()`, `userurl = <FRONTEND_URL>/session/:unique_id`
  - Shows admin video player with Play, Pause, Volume, Fullscreen controls
- Student page (`/session/:unique_id`) shows the same video player for students (same `unique_id`)
- Clean, modular backend: controllers, models, routes
- Auto-increment `id` implemented via a `Counter` collection

---

## Tech stack
- Frontend: React 18 + Vite, React Router v6, Tailwind CSS (optional classes included)
- Backend: Node.js + Express
- Database: MongoDB Atlas (Mongoose)
- Hosting: Frontend on Vercel, Backend on Render

---

## Project structure
