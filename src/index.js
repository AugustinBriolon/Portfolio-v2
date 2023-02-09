import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import './index.css';
import './scss/styles.js';
import HomePage  from "./pages/HomePage";
import NotFound from "./pages/NotFound.js";
import Projects from "./pages/ProjectPage.js";
import Contact from "./pages/ContactPage.js";
import About from "./pages/AboutPage.js";
import Validation from "./pages/ValidationPage.js";

console.log('%cBienvenue aux Développeurs', 'font-weight: bold; font-size: 45px;color: rgb(47,128,237); text-shadow: 3px 3px 0 rgb(4,77,145) , 6px 6px 0 rgb(42,21,113)')
console.log('%cVous pouvez voir le code source de ce site sur mon Github : https://github.com/AugustinBriolon/Portfolio-v2', 'font-size: 15px')

const router = createBrowserRouter([
  { path: "/", element: <HomePage />, },
  { path: "/projects", element: <Projects />, },
  { path: "/contact", element: <Contact />, },
  { path: "/about", element: <About />, },
  { path: "/validation", element: <Validation />, },
  { path: "*", element: <NotFound />, },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
