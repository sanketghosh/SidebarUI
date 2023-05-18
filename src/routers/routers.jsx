import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/Layout";

import { AllApps, Analytics, Auth, Build, Settings, Storage } from "../pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <AllApps />,
      },
      {
        path: "auth",
        element: <Auth />,
      },
      {
        path: "storage",
        element: <Storage />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
      {
        path: "build/:id",
        element: <Build />,
      },
      {
        path: "analytics/:id",
        element: <Analytics />,
      },
    ],
  },
]);
