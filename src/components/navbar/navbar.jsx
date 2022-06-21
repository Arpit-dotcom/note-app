import { Link } from "react-router-dom";
import { useAuth } from "context";
import { FaBars } from "react-icons/fa";
import "./navbar.css";
import { MobileSidebar } from "components";
import { useState } from "react";

export const Navbar = () => {
  const { isLoggedIn } = useAuth();
  const [sidebar, setSidebar] = useState(false);

  return (
    <nav className="simple-navigation">
      {sidebar && <MobileSidebar setSidebar={setSidebar} />}
      <span className="nav-list">
        <h1 className="text">
          <FaBars className="bar" onClick={() => setSidebar((prev) => !prev)} />
          Note Rush
        </h1>
      </span>

      {/* <input
          className="nav-search"
          type="text"
          placeholder="Search for note"
        /> */}

      <div className="nav-list">
        <div className="list-item icons">
          <Link className="profile" to={isLoggedIn ? "/logout" : "/login"}>
            <i className="fas fa-user"></i>
            <small className="nav-icon-text">
              {isLoggedIn ? "Logout" : "Login"}
            </small>
          </Link>
        </div>
      </div>
    </nav>
  );
};
