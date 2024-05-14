import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import AllEvent from "../Pages/AllEvent/AllEvents";
import AddEvent from "../Pages/AddEvent/AddEvent";
import ManageEvent from "../Pages/ManageEvent/ManageEvent";
import BoookedEvent from "../Pages/BookedEvent/BoookedEvent";
import EventToDo from "../Pages/EventToDo/EventToDo";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import PrivateRoute from "./PrivateRoute";
import Details from "../Pages/serviceDetails/Details";
import UpdatePage from "../Pages/UpdatedPage/UpdatePage";
import BookedPage from "../Pages/BookedPages/BookedPage";
import ErrorPage from "../Pages/404Page/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
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
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API}/allServices`),
      },
      {
        path: "/bookedEvent",
        element: (
          <PrivateRoute>
            {" "}
            <BoookedEvent></BoookedEvent>
          </PrivateRoute>
        ),
        loader: () => fetch(`${import.meta.env.VITE_API}/allBookedServices`),
      },
      {
        path: "/toDoEvent",
        element: (
          <PrivateRoute>
            {" "}
            <EventToDo></EventToDo>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API}/allBookedServices`),
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
      {
        path: "/updateService/:id",
        element: <UpdatePage></UpdatePage>,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API}/allServices/${params.id}`),
      },
      {
        path: "/bookedService/:id",
        element: <BookedPage></BookedPage>,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API}/allServices/${params.id}`),
      },
    ],
  },
]);

export default router;
