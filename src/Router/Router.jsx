import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import AllEvent from "../Pages/AllEvent/AllEvent";
import AddEvent from "../Pages/AddEvent/AddEvent";
import ManageEvent from "../Pages/ManageEvent/ManageEvent";
import BoookedEvent from "../Pages/BookedEvent/BoookedEvent";
import EventToDo from "../Pages/EventToDo/EventToDo";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import PrivateRoute from "./PrivateRoute";
import Details from "../Pages/serviceDetails/Details";

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
        element: (
          <PrivateRoute>
            <AddEvent></AddEvent>
          </PrivateRoute>
        ),
      },
      {
        path: "/manageEvent",
        element: (
          <PrivateRoute>
            {" "}
            <ManageEvent></ManageEvent>
          </PrivateRoute>
        ),
      },
      {
        path: "/bookedEvent",
        element: (
          <PrivateRoute>
            {" "}
            <BoookedEvent></BoookedEvent>
          </PrivateRoute>
        ),
      },
      {
        path: "/toDoEvent",
        element: (
          <PrivateRoute>
            {" "}
            <EventToDo></EventToDo>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/registration",
        element: <Registration></Registration>,
      },
      {
        path: "/details/:_id",
        element: (
          <PrivateRoute>
            <Details></Details>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API}/allServices`),
      },
    ],
  },
]);

export default router;
