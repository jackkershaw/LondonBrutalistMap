import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/globals.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Map from "./pages/map.tsx";
import Game from "./pages/game.tsx";
import About from "./pages/about.tsx";
import Index from "./pages/index.tsx";
import ErrorPage from "./pages/errorpage.tsx";
import Layout from "./components/layout.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Map />
      </Layout>
    ),
    errorElement: (
      <Layout>
        <ErrorPage></ErrorPage>
      </Layout>
    ),
  },
  {
    path: "/game",
    element: (
      <Layout>
        <Game />
      </Layout>
    ),
  },
  {
    path: "/about",
    element: (
      <Layout>
        <About />
      </Layout>
    ),
  },

  {
    path: "/building-index",
    element: (
      <Layout>
        <Index />
      </Layout>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
