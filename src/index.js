import React from "react";
import ReactDOM from "react-dom/client";

import Home from "./components/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddVehicle from "./components/AddVehicle";
import App from "./App";
import "./index.css";

import ManagePosts from "./components/ManagePosts";
import EditUser from "./components/EditUser";
import ContactUs from "./components/ContactUs";
import Services from "./components/Services";
import PrivacyPolicy from "./components/PrivacyPolicy";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "add-vehicle",
        element: <AddVehicle />,
      },
      {
        path: "manage-vehicle",
        element: <ManagePosts />,
      },
      {
        path: "edituser/:id",
        element: <EditUser />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "contact-us",
        element: <ContactUs />,
      },
      {
        path: "privacy-policy",
        element: <PrivacyPolicy/>,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
