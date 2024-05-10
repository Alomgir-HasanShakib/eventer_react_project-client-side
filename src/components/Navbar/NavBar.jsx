import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/eventer.png'

const NavBar = () => {
  const navLInk = (
    <div className="flex text-xl">
      <NavLink to="/">
        <li className="text-gray-400">
          <span>Home</span>
        </li>
      </NavLink>
      <NavLink to="/allevents">
        <li className="text-gray-400">
          <span>Event</span>
        </li>
      </NavLink>

      <li>
        <details>
          <summary className="text-gray-400">Dashboard</summary>
          <ul className="p-2 bg-base-100 rounded-t-none ">
            <Link>
              <li className="mb-3 hover:bg-green-400 p-2  hover:rounded-md">Add Event</li>
            </Link>
            <Link>
              <li className="mb-3 hover:bg-green-400 p-2  hover:rounded-md">Manage Event</li>
            </Link>
            <Link>
              <li className="mb-3 hover:bg-green-400 p-2  hover:rounded-md">Booked Event</li>
            </Link>
            <Link>
              <li className="mb-3 hover:bg-green-400 p-2  hover:rounded-md">Event to-do</li>
            </Link>
          </ul>
        </details>
      </li>
    </div>
  );
  return (
    <div className="navbar bg-base-100 container mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLInk}
          </ul>
        </div>
        <Link to='/' className=" font-extrabold text-primaryColor text-4xl flex items-center "> <img className="w-10" src={logo} alt="" />Eventer</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLInk}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn bg-primaryColor text-white px-8 text-xl uppercase font-normal">Log in</a>
      </div>
    </div>
  );
};

export default NavBar;
