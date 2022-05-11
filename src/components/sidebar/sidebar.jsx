import { Link } from "react-router-dom";
import "./sidebar.css";

export const Sidebar = () => {
  const categories = [
    { icons: "fas fa-home", text: "Home", link: "/home" },
    { icons: "fas fa-tag", text: "Label", link: "/label" },
    { icons: "fas fa-archive", text: "Archive", link: "/archive" },
    { icons: "fas fa-trash", text: "Trash", link: "/trash" },
  ];

  return (
    <aside className="drawer">
      <ul className="sub-drawer stacked-list">
        {categories.map((category, index) => (
          <li className="list-item" key={index}>
            <Link className="link" to={category.link}>
              <i className={category.icons}></i>
              <span>{category.text}</span>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};
