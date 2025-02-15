import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/globals.css";
import "./styles/_colors.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Map from "./pages/map.tsx";
import Game from "./pages/game.tsx";
import About from "./pages/about.tsx";
import Index from "./pages/index.tsx";
import ErrorPage from "./pages/errorpage.tsx";
import Layout from "./components/layout.tsx";
import { Provider } from "react-redux";
import { store } from "./store/store";

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
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
