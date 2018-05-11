import React, { Component } from "react";
import "./Dog.css";
import MyContext from "../MyContext";
class Dog1 extends Component {
  render() {
    return (
      <div className="Dog1">
        <MyContext.Consumer>
          {context => (
            <React.Fragment>
              <h1>Name : {context.state.dog1.name}</h1>
              <img
                height="300"
                src="http://www.heloisaamante.com.br/press/wp-content/uploads/2018/02/goldie.jpg"
              />
              <h3>Age : {context.state.dog1.age}</h3>
              <p>Hunger :{context.state.dog1.hunger}</p>
              <p>Stress :{context.state.dog1.stress}</p>
              <p>Happiness :{context.state.dog1.happiness}</p>
              <button
                onClick={() => {
                  context.feed("dog1");
                }}
                className="dog_button"
              >
                FEED
              </button>
              <button
                onClick={() => {
                  context.play("dog1");
                }}
                className="dog_button"
              >
                PLAY
              </button>
              <button
                onClick={() => {
                  context.play("dog1");
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

export default Dog1;
