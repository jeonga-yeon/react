/* eslint-disable no-unused-expressions */
import React, { Component } from "react";
import BoxClass from "./components/BoxClass";
import "./App.css";

export default class AppClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userSelect: null,
      computerSelect: null,
      result: "",
    };
  }

  choice = {
    rock: {
      name: "Rock",
      image:
        "https://images.unsplash.com/photo-1589694502732-74708bde4e3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fHJvY2t8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    },
    scissors: {
      name: "Scissors",
      image:
        "https://images.unsplash.com/photo-1584065422336-7844ec884107?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    paper: {
      name: "Paper",
      image:
        "https://images.unsplash.com/photo-1595113316349-9fa4eb24f884?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
    },
  };

  random = () => {
    const arrayItem = Object.keys(this.choice);
    const randomItem = Math.floor(Math.random() * arrayItem.length);
    return arrayItem[randomItem];
  };

  judgement = (user, computer) => {
    if (user === computer) {
      return "tie";
    } else if (user === "rock") return computer === "scissors" ? "win" : "lose";
    else if (user === "scissors") return computer === "paper" ? "win" : "lose";
    else if (user === "paper") return computer === "rock" ? "win" : "lose";
  };

  play = (userChoice) => {
    const computerChoice = this.random();
    const result = this.judgement(userChoice, computerChoice);
    this.setState({
      userSelect: this.choice[userChoice],
      computerSelect: this.choice[computerChoice],
      result,
    });
  };

  render() {
    return (
      <div>
        <div className="main">
          <BoxClass
            title="You"
            item={this.state.userSelect}
            result={this.state.result}
          />
          <BoxClass
            title="Computer"
            item={this.state.computerSelect}
            result={this.state.result}
          />
        </div>
        <div className="main">
          <button onClick={() => this.play("scissors")}>가위</button>
          <button onClick={() => this.play("rock")}>바위</button>
          <button onClick={() => this.play("paper")}>보</button>
        </div>
      </div>
    );
  }
}
