import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../Context/Authentication/Authentication";

const Login = () => {
  const [showpass, setshowPass] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // context for authentication
  const { loginUser } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (data) => {
    const { email, password } = data;
    if (password.length < 6) {
      return toast.error("Password length must be 6 character");
    }
    if (/^(?=.*[a-z])(?=.*[A-Z]).+$/.test(password)) {
      return loginUser(email, password)
        .then((result) => {
          toast.success("Successfully Login!");
          navigate(location?.state ? location?.state : "/");
        })
        .catch((error) => {
          toast.error("Login Error!");
        });
    } else {
      return toast.error(
        "Password should have atleast one uppercase and lowercase character"
      );
    }
    // loginUser(email, password)
    //   .then((result) => {
    //     toast.success("Successfully Login!");

    //     // navigate after login
    //     navigate(location?.state ? location.state : "/");
    //   })
    //   .catch((err) => toast.error("Login Error"));
  };

  return (
    <div className="max-w-screen-sm bg-gray-300 mb-16  p-4 md:p-16 mx-auto mt-24 rounded-md">
      <Helmet>
        <title>Login</title>
      </Helmet>
      <h1 className="text-center text-2xl md:text-3xl mb-8 font-semibold text-primaryColor uppercase">
        Log In Now
      </h1>
      <form className="space-y-2" onSubmit={handleSubmit(handleLogin)}>
        <label className="input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
            <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
          </svg>
          <input
            type="text"
            className="grow"
            placeholder="Email"
            {...register("email", { required: true })}
          />
        </label>
        {errors.email && (
          <span className="text-red-600">This field is required</span>
        )}

        <label className="input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
              //   clipRule="evenodd"
            />
          </svg>
          <input
            type={!showpass ? "text" : "password"}
            className="grow"
            placeholder="Password"
            {...register("password", { required: true })}
          />
          <span onClick={() => setshowPass(!showpass)}>
            {!showpass ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
          </span>
        </label>
        {errors.password && (
          <span className="text-red-600">This field is required</span>
        )}
        <input
          type="submit"
          value="Log In"
          className="btn w-full bg-primary text-white hover:bg-transparent hover:border-primary hover:text-primary"
        />
      </form>
      <p className="text-darker mt-6 text-center">
        New Here? Please{" "}
        <Link to="/registration" className="link font-bold">
          Register
        </Link>
      </p>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default Login;
