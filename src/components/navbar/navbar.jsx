import "./navbar.css";

export const Navbar = () =>{
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
            <a className="profile">
              <i className="fas fa-user"></i>
              <small className="nav-icon-text">Login</small>
            </a>
          </div>
        </div>
      </nav>
    );
}