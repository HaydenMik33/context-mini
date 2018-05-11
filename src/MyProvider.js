import React, { Component } from "react";
import MyContext from "./MyContext";

class MyProvider extends Component {
  constructor() {
    super();
    this.state = {
      dog1: {
        name: "dog1",
        age: "dog1's age",
        hunger: 0,
        stress: 0,
        happiness: 100
      },
      dog2: {
        name: "dog2",
        age: "dog2's age",
        hunger: 0,
        stress: 0,
        happiness: 100
      },
      dog3: {
        name: "dog3",
        age: "dog3's",
        hunger: 0,
        stress: 0,
        happiness: 100
      }
    };
  }

  render() {
    return (
      <MyContext.Provider
        value={{
          state: this.state,
          feed: index => {
            console.log(index);
            //console.log(this.state[index].hunger);
            this.setState({
              [index]: {
                hunger: this.state[index].hunger + 10
              }
            });
          },
          test: function() {
            console.log("it worked!!!!");
          }
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}
export default MyProvider;
