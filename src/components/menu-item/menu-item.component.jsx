import React from "react";
import "./menu-item.styles.scss";
const MenuItem = ({ id, imageUrl, title, size }) => (
  <div
    className={`
        ${size} menu-item
    `}
  >
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    ></div>
    <div className="content">
      <div className="title">{title}</div>
      <div className="subtitle">SHOP NOW</div>
    </div>
  </div>
);

export default MenuItem;
