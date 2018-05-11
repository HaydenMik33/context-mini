import React, { Component } from "react";
import MyContext from "./MyContext";
import Swal from "sweetalert2";

class MyProvider extends Component {
  constructor() {
    super();
    this.state = {
      dog1: {
        name: "Storm",
        age: 4,
        hunger: 50,
        stress: 50,
        happiness: 50
      },
      dog2: {
        name: "Trooper",
        age: 6,
        hunger: 50,
        stress: 50,
        happiness: 50
      },
      dog3: {
        name: "Goliath",
        age: 243,
        hunger: 50,
        stress: 50,
        happiness: 50
      }
    };
  }

  render() {
    return (
      <MyContext.Provider
        value={{
          state: this.state,
          feed: index => {
            this.state[index].hunger === 0
              ? Swal("Your dog is not hungry")
              : this.setState({
                  [index]: {
                    name: this.state[index].name,
                    age: this.state[index].age,

                    hunger:
                      this.state[index].hunger - 30 < 0
                        ? 0
                        : this.state[index].hunger - 40,
                    stress:
                      this.state[index].stress - 10 < 0
                        ? 0
                        : this.state[index].stress - 10,
                    happiness:
                      this.state[index].happiness + 10 > 100
                        ? 100
                        : this.state[index].happiness + 10
                  }
                });
          },

          play: index => {
            this.state[index].happiness === 100
              ? Swal("played tooo much your dog's tired of you")
              : this.setState({
                  [index]: {
                    name: this.state[index].name,
                    age: this.state[index].age,

                    hunger:
                      this.state[index].hunger + 20 > 100
                        ? 100
                        : this.state[index].hunger + 20,
                    stress:
                      this.state[index].stress - 10 < 0
                        ? 0
                        : this.state[index].stress - 10,
                    happiness:
                      this.state[index].happiness + 20 > 100
                        ? 0
                        : this.state[index].happiness + 20
                  }
                });
          },
          train: index => {
            this.state[index].stress === 100
              ? Swal("Your dog's stressed out")
              : this.setState({
                  [index]: {
                    name: this.state[index].name,
                    age: this.state[index].age,

                    hunger:
                      this.state[index].hunger + 40 < 0
                        ? 0
                        : this.state[index].hunger + 40,
                    stress:
                      this.state[index].stress + 10 < 0
                        ? 0
                        : this.state[index].stress + 10,
                    happiness:
                      this.state[index].happiness - 10 < 0
                        ? 0
                        : this.state[index].happiness - 10
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
