import React from "react";
import LineItem from "./LineItem";

const ItemList = ({ items }) => {
  return (
    <ul>
      {items.map((item) => (
        <LineItem item={item} key={item.id} />
      ))}
    </ul>
  );
};

export default ItemList;
