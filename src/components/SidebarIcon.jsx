import React from "react";
import "../styles/Sidebar.scss"


export default function SidebarIcon({ iconType }) {
  return (
    <div className="side-bar__icon">
      <img
        src={`../src/assets/svg/${iconType}-icon.svg`} 
        alt={iconType}
        width={32}
        height={32}
        className="side-bar__icon-image"
      />
    </div>
  );
}
