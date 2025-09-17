import "./App.css";
import { Link, Outlet } from "react-router";
import { useState, useEffect } from "react";
import { getGenres } from "./api/tmdb";




export default function App() {
  const [genres, setGenres] = useState([])

    useEffect(() => {
  getGenres().then(data => setGenres(data))
  }, [])

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <nav className="text-white p-6 text-2xl flex items-center justify-between">
        <span>🚀 What to watch !</span>
        <div className="space-x-4 text-base">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/about" className="hover:underline">About</Link>
          <Link to="/favorites" className="hover:underline">Favorites</Link>
        </div>
      </nav>
      {/* Main content */}
      <main className="flex-1">

        <Outlet context={{ genres }} />
      </main>
      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center p-4 text-sm">
        © {new Date().getFullYear()} What to watch. All rights reserved.
      </footer>
    </div>
  )
}
