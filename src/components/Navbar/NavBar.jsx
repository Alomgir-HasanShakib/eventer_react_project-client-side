import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/eventer.png";
import "../../index.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/Authentication/Authentication";
import toast, { Toaster } from "react-hot-toast";
import { AiOutlineLogin } from "react-icons/ai";
import { LuLogOut } from "react-icons/lu";

const NavBar = () => {
  const [theme, setTheme] = useState("light");
  const { user, logOut, loader } = useContext(AuthContext);
  const handleLogout = () => {
    return logOut().then((res) => toast.success("LogOut Succefull"));
  };

  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  const toggleTheme = (e) => {
    if (e.target.checked) {
      localStorage.setItem("theme", "luxury");
      setTheme("luxury");
      document.querySelector("html").setAttribute("data-theme", "luxury");
    } else {
      localStorage.setItem("theme", "light");
      setTheme("light");
      document.querySelector("html").setAttribute("data-theme", "light");
    }
  };

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
          <span>ALL Event</span>
        </li>
      </NavLink>

      {user && (
        <li>
          <details>
            <summary className="text-gray-400 md:text-xl isActive:currentselect">
              Dashboard
            </summary>
            <ul className="p-2 bg-base-100 rounded-t-none md:text-xl">
              <NavLink
                to="/addevent"
                className={({ isActive, isPending, isTransitioning }) =>
                  [
                    isPending ? "pending" : "",
                    isActive ? "currentselect" : "",
                    isTransitioning ? "transitioning" : "",
                  ].join(" ")
                }
              >
                <li className="mb-3 hover:bg-primaryColor p-2  hover:rounded-md">
                  Add Service
                </li>
              </NavLink>
              <NavLink
                to="/manageEvent"
                className={({ isActive, isPending, isTransitioning }) =>
                  [
                    isPending ? "pending" : "",
                    isActive ? "currentselect" : "",
                    isTransitioning ? "transitioning" : "",
                  ].join(" ")
                }
              >
                <li className="mb-3 hover:bg-primaryColor p-2  hover:rounded-md">
                  Manage Service
                </li>
              </NavLink>
              <NavLink
                to="/bookedEvent"
                className={({ isActive, isPending, isTransitioning }) =>
                  [
                    isPending ? "pending" : "",
                    isActive ? "currentselect" : "",
                    isTransitioning ? "transitioning" : "",
                  ].join(" ")
                }
              >
                <li className="mb-3 hover:bg-primaryColor p-2  hover:rounded-md">
                  Booked Service
                </li>
              </NavLink>
              <NavLink
                to="/toDoEvent"
                className={({ isActive, isPending, isTransitioning }) =>
                  [
                    isPending ? "pending" : "",
                    isActive ? "currentselect" : "",
                    isTransitioning ? "transitioning" : "",
                  ].join(" ")
                }
              >
                <li className="mb-3 hover:bg-primaryColor p-2  hover:rounded-md">
                  Service to-do
                </li>
              </NavLink>
            </ul>
          </details>
        </li>
      )}
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
      {loader ? (
        <span className="loading loading-ring loading-lg"></span>
      ) : (
        !user && (
          <div className="navbar-end">
            <Link
              to="/login"
              className="btn bg-primaryColor text-white md:px-8 md:text-xl uppercase font-normal"
            >
              <AiOutlineLogin></AiOutlineLogin>Log In
            </Link>
          </div>
        )
      )}
      {user && (
        <div className="navbar-end">
          <div className="avatar">
            <button
              className="w-10 mr-2 tooltip rounded-full ring ring-primary ring-offset-base-100 ring-offset-2"
              data-tip={user.displayName}
            >
              <img className="rounded-full ring" src={user?.photoURL} />
            </button>
          </div>
          <button
            onClick={handleLogout}
            className="btn bg-primaryColor text-white md:px-8 md:text-xl uppercase font-normal"
          >
            <LuLogOut className="text-white font-extrabold"></LuLogOut>
          </button>
        </div>
      )}
      <div>
            <label className="cursor-pointer grid place-items-center ml-4">
              <input
                onChange={toggleTheme}
                checked={theme === "luxury"}
                type="checkbox"
                value="synthwave"
                className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
              />
              <svg
                className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
              </svg>
              <svg
                className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            </label>
          </div>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default NavBar;
