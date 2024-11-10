import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate
} from "react-router-dom";
import Home from "./Pages/home/Home";
import SingIn from "./Pages/Login/signin/SingIn";
import SingUp from "./Pages/Login/singup/SingUp";
import Profile_own from "./Pages/Profile/Profile_own/Profile_own";
import MyProfile from "./Pages/Profile/Profile_own/MyProfile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/signin" /> 
  },
  {
    path: "/signin", 
    element: <SingIn />
  },
  {
    path: "/signup",
    element: <SingUp />
  },
  {
    path: "/home",
    element: <Home />
  },
  {
    path: "/ourprofile",
    element: <Profile_own />
  },
  {
    path: "/myprofile",
    element: <MyProfile />
  }
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
