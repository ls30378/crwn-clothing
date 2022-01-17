import React from "react";
import "./menu-item.styles.scss";
import { withRouter } from "react-router";
const MenuItem = ({ id, imageUrl, title, size, linkUrl, history, match }) => (
  <div
    className={`
        ${size} menu-item
    `}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
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

export default withRouter(MenuItem);
