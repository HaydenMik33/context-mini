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
              <h3>Age : {context.state.dog1.age}</h3>
              <p>Hunger :{context.state.dog1.hunger}</p>

              <button
                onClick={() => {
                  context.feed("dog1");
                }}
              >
                FEED
              </button>
            </React.Fragment>
          )}
        </MyContext.Consumer>
      </div>
    );
  }
}

///hunger stress happiness
//feed play
export default Dog1;
