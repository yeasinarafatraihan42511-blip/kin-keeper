import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Homepage from "../pages/homepage/Homepage";
import Card from "../pages/homepage/card/Card";

import ErrorPage from "../pages/homepage/ErrorPage/ErrorPage";
import Timeline from "../pages/timeline/timeline";

 export const router = createBrowserRouter([
  {
    path: '/',
    element:<MainLayout />,
    children:[
      {
        index:true,
        element:<Homepage />
      },
      {
        path: "/timeline",
        element:<Timeline />
      },
      {}

    ],
    errorElement: <ErrorPage/>
  },
  {
    path: '/about',
    element:"This is the about page.",
  }
])