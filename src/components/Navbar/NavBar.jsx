import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/eventer.png";
import "../../index.css";
import { GiHamburgerMenu } from "react-icons/gi";

const NavBar = () => {
  const navLInk = (
    <>
      <NavLink
        to="/"
        className={({ isActive, isPending, isTransitioning }) =>
          [
            isPending ? "pending" : "",
            isActive ? "currentselect" : "",
            isTransitioning ? "transitioning" : "",
          ].join(" ")
        }
      >
        <li className="text-gray-400 text-xl">
          <span>Home</span>
        </li>
      </NavLink>
      <NavLink
        className={({ isActive, isPending, isTransitioning }) =>
          [
            isPending ? "pending" : "",
            isActive ? "currentselect" : "",
            isTransitioning ? "transitioning" : "",
          ].join(" ")
        }
        to="/allevents"
      >
        <li className="text-gray-400 text-xl">
          <span>Event</span>
        </li>
      </NavLink>

      <li>
        <details>
          <summary className="text-gray-400 md:text-xl isActive:currentselect">Dashboard</summary>
          <ul className="p-2 bg-base-100 rounded-t-none md:text-xl">
            <Link>
              <li className="mb-3 hover:bg-primaryColor p-2  hover:rounded-md">
                Add Event
              </li>
            </Link>
            <Link>
              <li className="mb-3 hover:bg-primaryColor p-2  hover:rounded-md">
                Manage Event
              </li>
            </Link>
            <Link>
              <li className="mb-3 hover:bg-primaryColor p-2  hover:rounded-md">
                Booked Event
              </li>
            </Link>
            <Link>
              <li className="mb-3 hover:bg-primaryColor p-2  hover:rounded-md">
                Event to-do
              </li>
            </Link>
          </ul>
        </details>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 container mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <GiHamburgerMenu className="text-xl"></GiHamburgerMenu>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLInk}
          </ul>
        </div>
        <Link
          to="/"
          className=" font-extrabold text-primaryColor text-4xl flex items-center "
        >
          {" "}
          <img className=" w-7 md:w-10" src={logo} alt="" />
          Eventer
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLInk}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn bg-primaryColor text-white md:px-8 md:text-xl uppercase font-normal">
          Log in
        </a>
      </div>
    </div>
  );
};

export default NavBar;
