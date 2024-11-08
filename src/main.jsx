import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Home from "./Pages/home/Home";
import SingIn from "./Pages/Login/signin/SingIn";
import SingUp from "./Pages/Login/singup/SingUp";
import Profile_own from "./Pages/Profile/Profile_own/Profile_own";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/signIn",
    element: <SingIn/>
  },
  {
    path: "/signIn",
    element: <SingUp/>
  },
  {
    path:"/myProfile",
    element:<Profile_own/>
  }
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
