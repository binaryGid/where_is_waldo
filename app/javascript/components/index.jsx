import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./Home";
import Photos from "./Photos";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "photos",
        element: <Photos />,
      },
    ],
  },
]);

document.addEventListener("turbo:load", () => {
  const root = createRoot(
    document.body.appendChild(document.createElement("div")),
  );
  root.render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>,
  );
});
