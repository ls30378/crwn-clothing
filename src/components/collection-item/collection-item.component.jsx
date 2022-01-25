import React from "react";
import "./collection-item.style.scss";
import CustomButton from "../custom-button/custom-button.component";

const CollectionItem = ({ id, name, price, imageUrl }) => (
  <div className="collection-item">
    <div
      className="image"
      style={{ backgroundImage: `url(${imageUrl})` }}
    ></div>
    <div className="name">{name}</div>
    <div className="price">{price}</div>
    <CustomButton inverted>Add to Cart</CustomButton>
  </div>
);

export default CollectionItem;
