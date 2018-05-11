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
    return (
      <MyProvider>
        <div className="App">
          <div className="Selection">
            <div
              className="dogCard1"
              onClick={() => this.setState({ select: 1 })}
            >
              Select the first dog
            </div>
            <div
              className="dogCard2"
              onClick={() => this.setState({ select: 2 })}
            >
              {" "}
              Select the 2 dog
            </div>
            <div
              className="dogCard3"
              onClick={() => this.setState({ select: 3 })}
            >
              {" "}
              Select the 3 dog
            </div>
          </div>
          <div className="DogStatus">
            {select === 1 ? <Dog1 /> : select === 2 ? <Dog2 /> : <Dog3 />}
          </div>
        </div>
      </MyProvider>
    );
  }
}

export default App;
