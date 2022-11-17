import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaUser } from "react-icons/fa";
import "./Navbar.css";
import { AuthContext } from "../../Hook/UserContext";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const [clicked, setClicked] = useState(false);

  const handleLogOut = () => {
    logOut()
      .then((result) => {})
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleClick = () => {
    setClicked(!clicked);
  };
  return (
    <div className="flex justify-center">
      <nav className="w-full lg:px-28">
        <NavLink to="/" className="flex items-center">
          {/* <img className="w-10" src={logo} alt="" /> */}
          <span className="font-bold text-3xl">TRU VIK</span>
        </NavLink>
        <div className="menu-icon mt-2.5" onClick={handleClick}>
          {clicked ? <FaBars /> : <FaBars />}
        </div>
        <ul className={clicked ? "menu-list" : "menu-list close"}>
          <li>
            <NavLink to="/home">Home</NavLink>
          </li>
          <li>
            {" "}
            <NavLink to="/services">Services</NavLink>
          </li>
          <li>
            {" "}
            <NavLink to="/blogs">Blogs</NavLink>
          </li>
          {user?.uid ? (
            <>
              <li>
                <p className="image-align mr-4"></p>
              </li>
              <li className="font-bold cursor-pointer mr-3">
                <NavLink to='/reviews'>My Reviews</NavLink>
              </li>
              <li className="font-bold cursor-pointer mr-3">
                <NavLink to='/add-services'>Add Service</NavLink>
              </li>
              <li
                onClick={handleLogOut}
                className="font-bold cursor-pointer text-red-700"
              >
                Logout
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/login">Login</NavLink>{" "}
              </li>
              <li>
                <NavLink to="/register">Register</NavLink>{" "}
              </li>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
