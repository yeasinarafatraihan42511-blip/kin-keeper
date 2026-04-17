import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Homepage from "../pages/homepage/Homepage";
import Card from "../pages/homepage/card/Card";

import ErrorPage from "../pages/homepage/ErrorPage/ErrorPage";
import Timeline from "../pages/timeline/timeline";
import Stats from "../pages/stats/Stats";
import Friend from "../pages/friends/Friend";
import FriendDetails from "../pages/friendDetails/FriendDetails";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Homepage />
      },
      {
        path: "/timeline",
        element: <Timeline />
      },
      {
        path: "/stats",
        element: <Stats />
      },
      {
    path: "/friendDetails/:id",
    // element: <FriendDetails />
    Component: FriendDetails
  }
  


    ],
    errorElement: <ErrorPage />
  },

  {
    path: "/*",
    element: <ErrorPage />
  },
  

])