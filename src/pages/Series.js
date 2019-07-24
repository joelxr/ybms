import React from "react";
import { Consumer } from "../Context";

class Series extends React.Component {
  render() {
    return (
      <Consumer>
        {() => (
          <div>
            <h1>Series</h1>
          </div>
        )}
      </Consumer>
    );
  }
}

export default Series;
