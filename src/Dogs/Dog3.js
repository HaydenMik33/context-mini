import React, { Component } from "react";
import "./Dog.css";
import MyContext from "../MyContext";
class Dog3 extends Component {
  render() {
    return (
      <div className="Dog3">
        <MyContext.Consumer>
          {context => (
            <React.Fragment>
              <h1>Name : {context.state.dog3.name}</h1>
              <img
                height="300"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM3LQU-ZbNqFI7YGI_ZXzFMYMYCEzbwIw_JaC-IDbN0lfqwiRD_g"
              />
              <h3>Age : {context.state.dog3.age}</h3>

              <p>Hunger :{context.state.dog3.hunger}</p>
              <p>Stress :{context.state.dog3.stress}</p>
              <p>Happiness :{context.state.dog3.happiness}</p>
              <button
                onClick={() => {
                  context.feed("dog3");
                }}
                className="dog_button"
              >
                FEED
              </button>
              <button
                onClick={() => {
                  context.play("dog3");
                }}
                className="dog_button"
              >
                PLAY
              </button>
              <button
                onClick={() => {
                  context.train("dog3");
                }}
                className="dog_button"
              >
                TRAIN
              </button>
            </React.Fragment>
          )}
        </MyContext.Consumer>
      </div>
    );
  }
}

export default Dog3;
