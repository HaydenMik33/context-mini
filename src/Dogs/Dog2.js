import React, { Component } from "react";
import "./Dog.css";
import MyContext from "../MyContext";

class Dog2 extends Component {
  render() {
    return (
      <div className="Dog2">
        <MyContext.Consumer>
          {context => (
            <React.Fragment>
              <h1>Name : {context.state.dog2.name}</h1>
              <h3>Age : {context.state.dog2.age}</h3>
            </React.Fragment>
          )}
        </MyContext.Consumer>
      </div>
    );
  }
}

export default Dog2;
