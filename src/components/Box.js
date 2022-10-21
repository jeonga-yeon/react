/* eslint-disable jsx-a11y/alt-text */
import React from "react";

const Box = ({ title, item, result }) => {
  let gameResult;
  if (title === "Computer" && result !== "tie" && result !== "") {
    gameResult = result === "win" ? "lose" : "win";
  } else {
    gameResult = result;
  }
  return (
    <div className={`box ${gameResult}`}>
      <h1>{title}</h1>
      <h2>{item && item.name}</h2>
      <img className="item-img" src={item && item.img} />
      <h2>{gameResult}</h2>
    </div>
  );
};

export default Box;
