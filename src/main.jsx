import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import App from "./App";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import './index.css'


// Définition des routes
const router = createBrowserRouter([
  {
    path: "/",              // route racine
    element: <App />,       // App = layout global
    errorElement: <NotFound />, // si URL inconnue
    children: [
      { index: true, element: <Home /> },   // / → Home
      { path: "about", element: <About /> } // /about → About
    ]
  }
]);

// Rendu de l’app
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
