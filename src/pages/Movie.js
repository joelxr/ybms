import React from "react";
import { Consumer } from "../Context";

class Movie extends React.Component {
  render() {
    return (
      <Consumer>
        {() => (
          <div>
            <h1>Movie</h1>
          </div>
        )}
      </Consumer>
    );
  }
}

export default Movie;
