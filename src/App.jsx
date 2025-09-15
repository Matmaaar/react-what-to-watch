import "./App.css";
import { Link, Outlet } from "react-router";
export default function App() {
  return (

    <div>
        <div className="bg-brand text-white p-6 text-2xl">
      🚀 Tailwind v4 fonctionne !
    </div>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Outlet />
    </div>
  )
}
