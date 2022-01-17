import React from "react";
import "./menu-item.styles.scss";
const MenuItem = ({ id, imageUrl, title, size }) => (
  <div
    style={{
      backgroundImage: `url(${imageUrl})`,
    }}
    className={`
        ${size} menu-item
    `}
  >
    <div className="content">
      <div className="title">{title}</div>
      <div className="subtitle">SHOP NOW</div>
    </div>
  </div>
);

export default MenuItem;
