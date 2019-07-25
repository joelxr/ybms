import React from "react";
import { Consumer } from "../Context";
import List from "../components/List";

class Home extends React.Component {
  render() {
    return (
      <Consumer>
        {context => (
          <div className="home">
            <List list={context.msList} />
          </div>
        )}
      </Consumer>
    );
  }
}

export default Home;
