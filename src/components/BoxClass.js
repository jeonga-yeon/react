/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";

export default class BoxClass extends Component {
  render() {
    let gameResult;
    if (
      this.props.title === "Computer" &&
      this.props.result !== "tie" &&
      this.props.result !== ""
    ) {
      gameResult = this.props.result === "win" ? "lose" : "win";
    } else {
      gameResult = this.props.result;
    }
    return (
      <div className={`box ${gameResult}`}>
        <h2>{this.props.title}</h2>
        <h2>{this.props.item && this.props.item.name}</h2>
        <img
          className="item-img"
          src={this.props.item && this.props.item.image}
        />
        <h1>{gameResult}</h1>
      </div>
    );
  }
}
