import { useContext } from "react";
import logo from '../../../assets/logo.svg'
import { AuthContext } from "../../../providers/AuthProvider";
import { Link } from "react-router-dom";

const Header = () => {
  const {user, logOut} = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
    .then(()=> {})
    .catch(error => console.log(error))
  }
    const lists = (
      <>
        <li>
          <Link to="/"> Home </Link>
        </li>
        <li>
          <Link to="/"> About </Link>
        </li>
        <li>
          <Link to="/"> Services </Link>
        </li>
        <li>
          <Link to="/"> Contact </Link>
        </li>
        <li>
          <Link to="/"> Blog </Link>
        </li>

        {user?.email ? (
          <li>
            <Link onClick={handleLogOut}> Log Out </Link>
          </li>
        ) : (
          <li>
            <Link to='/login'> Log In </Link>
          </li>
        )}
      </>
    );
    
    return (
      <div className="navbar bg-base-100 h-28 mb-6">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {lists}
            </ul>
          </div>
          <a to="/" className="btn btn-ghost normal-case text-xl">
            <img src={logo} alt="" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{lists}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn btn-outline btn-warning">Appointment</a>
        </div>
      </div>
    );
};

export default Header;