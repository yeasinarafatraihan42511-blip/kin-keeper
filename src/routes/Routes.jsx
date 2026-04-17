import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Homepage from "../pages/homepage/Homepage";
import Card from "../pages/homepage/card/Card";

import ErrorPage from "../pages/homepage/ErrorPage/ErrorPage";
import Timeline from "../pages/timeline/timeline";

import Friend from "../pages/friends/Friend";
import FriendDetails from "../pages/friendDetails/FriendDetails";
import Analytics from "../pages/stats/Stats";

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
        element: <Analytics />
      },
      {
    path: "/friendDetails/:id",
    // element: <FriendDetails />
    Component: FriendDetails
  },
  
  


    ],
    errorElement: <ErrorPage />
  },

  {
    path: "/*",
    element: <ErrorPage />
  },
 

])