import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import AllEvent from "../Pages/AllEvent/AllEvent";
import AddEvent from "../Pages/AddEvent/AddEvent";
import ManageEvent from "../Pages/ManageEvent/ManageEvent";
import BoookedEvent from "../Pages/BookedEvent/BoookedEvent";
import EventToDo from "../Pages/EventToDo/EventToDo";
import Login from "../Pages/Login/Login";

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
      {
        path: "/addevent",
        element: <AddEvent></AddEvent>,
      },
      {
        path: "/manageEvent",
        element: <ManageEvent></ManageEvent>,
      },
      {
        path: "/bookedEvent",
        element: <BoookedEvent></BoookedEvent>,
      },
      {
        path: "/toDoEvent",
        element: <EventToDo></EventToDo>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);

export default router;
