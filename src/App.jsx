import "./App.css";
import { Link, Outlet } from "react-router";
import { useState, useEffect } from "react";
import { getGenres } from "./api/tmdb";
import Navbar from "./components/Navbar";




export default function App() {
  const [genres, setGenres] = useState([])

    useEffect(() => {
  getGenres().then(data => setGenres(data))
  }, [])

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />
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
