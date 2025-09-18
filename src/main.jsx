import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import App from "./App";
import Home from "./pages/Home";
import About from "./pages/About";
import Movie from "./pages/Movie";
import Favorites from "./pages/Favorites";
import NotFound from "./pages/NotFound";
import Serie from "./pages/Serie";
import './index.css'


// Définition des routes
const router = createBrowserRouter([
  {
    path: "/",              // route racine
    element: <App />,       // App = layout global
    errorElement: <NotFound />, // si URL inconnue
    children: [
      { index: true, element: <Home /> },   // / → Home
      { path: "about", element: <About /> },
      { path: "favorites", element: <Favorites /> },
      { path: "movie/:id", element: <Movie /> },
      { path: "serie/:id", element: <Serie /> },
      { path: "movies", element: <Movie /> },
      { path: "tv-show", element: <tv-show /> }
    ]
  }
]);

// Rendu de l’app
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
