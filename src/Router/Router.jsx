import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import AllEvent from "../Pages/AllEvent/AllEvent";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/allevents",
        element: <AllEvent></AllEvent>,
      },
    ],
  },
]);

export default router;
