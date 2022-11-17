import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../Hook/UserContext";
import useTitle from "../../Hook/useTitle";

const Login = () => {
  useTitle("Login");

  const { signIn, setLoading, googleSignIn } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
    general: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    signIn(userInfo.email, userInfo.password)
      .then((result) => {
        const user = result.user;
        toast.success("successfully login");
        //get jwt token
        const currentUser = {
          email: user.email,
        };
        console.log(currentUser);

        fetch("https://visa-consultant-server.vercel.app/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            localStorage.setItem("visa-token", data.token);
            navigate(from, { replace: true });
          });
      })
      .catch((error) => {
        console.log(error);
        setErrors({ ...error, general: error.message });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleEmail = (event) => {
    const email = event.target.value;
    setUserInfo({ ...userInfo, email: event.target.value });
  };
  const handlePassword = (event) => {
    const password = event.target.value;
    setUserInfo({ ...userInfo, password: event.target.value });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        toast.success("successfully login");
        //get jwt token
        const currentUser = {
          email: user.email,
        };
        console.log(currentUser);

        fetch("https://visa-consultant-server.vercel.app/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            localStorage.setItem("visa-token", data.token);
            navigate(from, { replace: true });
          });
      })
      .catch((error) => {
        console.error("error", error);
      });
  };

  return (
    <div className="mt-10 mb-44">
      <h1 className="text-center text-4xl mb-6 font-bold ">Login Here</h1>
      <div className="mb-10 text-center">
        <button
          type="button"
          onClick={handleGoogleSignIn}
          className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
        >
          <svg
            className="mr-2 -ml-1 w-4 h-4"
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            data-icon="google"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 488 512"
          >
            <path
              fill="currentColor"
              d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
            ></path>
          </svg>
          Sign in with Google
        </button>
      </div>
      <div className="flex flex-col justify-center md:items-center sm:items-baseline">
        <form
          onSubmit={handleSubmit}
          className="lg:w-1/3 md:w-2/3 register-form"
        >
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name@gmail.com"
              onChange={handleEmail}
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Your password
            </label>
            <input
              type="password"
              id="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
              onChange={handlePassword}
            />
          </div>
          <div className="my-3">
            {errors.general && (
              <p className="error-message text-red-700">{errors.general}</p>
            )}
          </div>
          <div className="flex items-start mb-1">
            <Link
              to="/forget-password"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 hover:text-blue-500 cursor-pointer"
            >
              Forgot Password
            </Link>
          </div>
          <div className="flex items-start mb-1">
            <p className="ml-2 text-sm">
              Haven't create account yet??{" "}
              <Link className="text-base text-red-900 hover:text-red-600 font-bold">
                Register Here!!
              </Link>{" "}
            </p>
          </div>
          <button
            type="submit"
            className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
