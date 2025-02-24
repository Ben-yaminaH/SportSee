import React from "react";
import { Link } from "react-router-dom"; 
import SidebarIcon from "./SideBarIcon";
import "../styles/Sidebar.scss"

export default function Sidebar() {
  const currentYear = new Date().getFullYear();

  return (
    <aside className="side-bar">
      <nav className="side-bar__nav">
        <ul className="side-bar__unordered-list">
          {[
            { id: "gauge", icon: "yoga" },
            { id: "radar", icon: "swimming" },
            { id: "bar", icon: "bike" },
            { id: "line", icon: "dumbbell" },
          ].map((item) => (
            <li key={item.id} className="side-bar__list-item">
              <Link to={`#${item.id}`} className="side-bar__link">
                <SidebarIcon iconType={item.icon} />
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <small className="side-bar__copyright">
        Copyright, SportSee 2020 - {currentYear} ©
      </small>
    </aside>
  );
}
