import React from "react";
import { Consumer } from "../Context";

class About extends React.Component {
  render() {
    return (
      <Consumer>
        {() => (
          <div className="about">
            <h1>Motivation</h1>
            <p>This is YBMS (Your Beloved Movies and Series).</p>
          </div>
        )}
      </Consumer>
    );
  }
}

export default About;
