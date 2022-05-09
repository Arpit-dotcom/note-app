import "./sidebar.css";

export const Sidebar = () => {
  const categories = [
    { icons: "fas fa-home", text: "Home" },
    { icons: "fas fa-tag", text: "Label" },
    { icons: "fas fa-archive", text: "Archive" },
    { icons: "fas fa-trash", text: "Trash" },
  ];

  return (
    <aside className="drawer">
      <ul className="sub-drawer stacked-list">
        {categories.map((category, index) => (
          <li className="list-item" key={index}>
            <a className="link" href="">
              <i className={category.icons}></i>
              <span>{category.text}</span>
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
};
