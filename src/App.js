import React, { Component } from "react";
import "./App.css";
import Dog1 from "./Dogs/Dog1";
import Dog2 from "./Dogs/Dog2";
import Dog3 from "./Dogs/Dog3";
import MyProvider from "./MyProvider";

class App extends Component {
  state = {
    select: 1
  };
  render() {
    const { select } = this.state;
    const styles = {
      borderstyle: {
        border: "solid 3px #FFFF99"
      }
    };
    const { borderstyle } = styles;
    return (
      <MyProvider>
        <div className="App">
          <div className="Hayden">
            <h1 className="header">TAMAGOTCHI</h1>
            <div className="Selection">
              <div
                className="dogCard"
                onClick={() => this.setState({ select: 1 })}
                style={select === 1 ? borderstyle : null}
              >
                Storm
              </div>
              <div
                className="dogCard"
                onClick={() => this.setState({ select: 2 })}
                style={select === 2 ? borderstyle : null}
              >
                {" "}
                Trooper
              </div>
              <div
                className="dogCard"
                onClick={() => this.setState({ select: 3 })}
                style={select === 3 ? borderstyle : null}
              >
                {" "}
                Goliath
              </div>
            </div>
            <div className="DogStatus">
              {select === 1 ? <Dog1 /> : select === 2 ? <Dog2 /> : <Dog3 />}
            </div>
          </div>
        </div>
      </MyProvider>
    );
  }
}

export default App;
