import { Link } from "react-router-dom";
import { useAuth } from "../../context";
import "./navbar.css";

export const Navbar = () =>{
  const { isLoggedIn } = useAuth();
    return (
      <nav className="simple-navigation">
        <span className="nav-list">
          <h1 className="text">Note App</h1>
        </span>

        <input
          className="nav-search"
          type="text"
          placeholder="Search for product, brands and more"
        />

        <div className="nav-list">
          <div className="list-item icons">
            <Link className="profile" to={isLoggedIn ? "/logout" : "/login"}>
              <i className="fas fa-user"></i>
              <small className="nav-icon-text">{isLoggedIn ? "Logout" : "Login" }</small>
            </Link>
          </div>
        </div>
      </nav>
    );
}