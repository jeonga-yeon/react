/* eslint-disable jsx-a11y/alt-text */
import React from "react";

const Box = ({ title, item, result }) => {
  return (
    <div className="box">
      <h1>{title}</h1>
      <img className="item-img" src={item && item.img} />
      <h2>{result}</h2>
    </div>
  );
};

export default Box;
