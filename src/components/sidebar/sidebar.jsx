import { useNote } from "context";
import { NavLink } from "react-router-dom";
import "./sidebar.css";

export const Sidebar = () => {
  const { noteArrayDispatch } = useNote();
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
      <h2 className="heading">Sort By Time</h2>
      <label className="sort">
        <input
          className="cursor-pointer"
          type="radio"
          name="sort"
          onClick={() =>
            noteArrayDispatch({ type: "SORT_BY_TIME", payload: "Latest" })
          }
        />{" "}
        Latest
      </label>
      <label className="sort">
        <input
          className="cursor-pointer"
          type="radio"
          name="sort"
          onClick={() =>
            noteArrayDispatch({ type: "SORT_BY_TIME", payload: "Old" })
          }
        />{" "}
        Old
      </label>
    </aside>
  );
};
