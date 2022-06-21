import { Sort } from "components";
import { NavLink } from "react-router-dom";
import "./sidebar.css";

export const Sidebar = () => {
  const categories = [
    { icons: "fas fa-home", text: "Home", link: "/home" },
    { icons: "fas fa-tag", text: "Label", link: "/label" },
    { icons: "fas fa-archive", text: "Archive", link: "/archive" },
    { icons: "fas fa-trash-alt", text: "Trash", link: "/trash" },
  ];

  const activeStyle = {
    textDecoration: "underline",
  };

  return (
    <aside className="drawer">
      <ul className="sub-drawer stacked-list">
        {categories.map((category, index) => (
          <li className="list-item" key={index}>
            <NavLink
              className="link"
              to={category.link}
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <i className={category.icons}></i>
              <span>{category.text}</span>
            </NavLink>
          </li>
        ))}
      </ul>
      <Sort />
    </aside>
  );
};
