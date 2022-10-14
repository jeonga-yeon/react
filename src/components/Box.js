/* eslint-disable jsx-a11y/alt-text */
import React from "react";

const Box = ({ title }) => {
  return (
    <div className="box">
      <h1>{title}</h1>
      <img
        className="item-img"
        src="https://images.unsplash.com/photo-1589694502732-74708bde4e3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
      />
      <h2>WIN</h2>
    </div>
  );
};

export default Box;
