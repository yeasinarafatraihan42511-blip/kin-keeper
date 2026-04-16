import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Homepage from "../pages/homepage/Homepage";
import ErrorPage from "../pages/homepage/ErrorPage/ErrorPage";

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
        path: "/card",
        element: "<Card/>"
      }

    ],
    errorElement: <ErrorPage/>
  },
  {
    path: '/about',
    element:"This is the about page.",
  }
])