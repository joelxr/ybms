import React from "react";
import { Consumer } from "../Context";

class About extends React.Component {
  render() {
    return (
      <Consumer>
        {() => (
          <div>
            <h1>About</h1>
          </div>
        )}
      </Consumer>
    );
  }
}

export default About;
