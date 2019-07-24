import React from "react";
import { Consumer } from "../Context";

class Favorites extends React.Component {
  render() {
    return (
      <Consumer>
        {() => (
          <div>
            <h1>Favorites</h1>
          </div>
        )}
      </Consumer>
    );
  }
}

export default Favorites;
