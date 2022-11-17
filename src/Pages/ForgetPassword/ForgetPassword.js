import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../Hook/UserContext";

const ForgetPassword = () => {
  const { handleResetPassword } = useContext(AuthContext);
  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useState({
    email: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    general: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    handleResetPassword(userInfo.email)
      .then((result) => {
        toast.success("An email has been send to your mail");
        form.reset();
        navigate('/login');
      })
      .catch((error) => {
        console.log(error.message);
        setErrors({ ...error, general: error.message });
      });
  };

  const handleEmail = (event) => {
    const email = event.target.value;
    setUserInfo({ ...userInfo, email: event.target.value });
  };
  return (
    <div className="mt-10 mb-44">
      <h1 className="text-center text-4xl mb-6 font-bold ">Forget Email</h1>
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

          <div className="my-3">
            {errors.general && (
              <p className="error-message text-red-700">{errors.general}</p>
            )}
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

export default ForgetPassword;
