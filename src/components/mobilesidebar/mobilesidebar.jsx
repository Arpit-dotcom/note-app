import { NavLink } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { useAuth } from "context";

export const MobileSidebar = ({ setSidebar }) => {
  const { isLoggedIn } = useAuth();

  const activeStyle = {
    textDecoration: "underline",
  };

  return (
    <section className="mobile-sidebar">
      <div className="mobile-sidebar-container">
        <h2 className="heading">
          <FaUserAlt className="user" />
          Welcome
          <AiOutlineClose
            className="close"
            onClick={() => setSidebar((prev) => !prev)}
          />
        </h2>
        <ul className="list">
          <NavLink
            to="/home"
            className="list-item"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Home
          </NavLink>
          <NavLink
            to="/label"
            className="list-item"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Label
          </NavLink>
          <NavLink
            to="/archive"
            className="list-item"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Archive
          </NavLink>
          <NavLink
            to="/trash"
            className="list-item"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Trash
          </NavLink>
          <NavLink
            className="list-item"
            to={!isLoggedIn ? "/login" : "/logout"}
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            {!isLoggedIn ? "Login" : "Logout"}
          </NavLink>
        </ul>
      </div>
    </section>
  );
};
