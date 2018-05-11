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
              <h3>Age : {context.state.dog3.age}</h3>
            </React.Fragment>
          )}
        </MyContext.Consumer>
      </div>
    );
  }
}

export default Dog3;
