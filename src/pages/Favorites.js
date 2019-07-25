import React from "react";
import { Consumer } from "../Context";
import List from "../components/List";

class Favorites extends React.Component {
  render() {
    return (
      <Consumer>
        {context => (
          <div className="favorites">
            <List list={context.msFavored} noBanner="true" />
          </div>
        )}
      </Consumer>
    );
  }
}

export default Favorites;
