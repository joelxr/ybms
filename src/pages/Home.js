import React from "react";
import { Consumer } from "../Context";
import Card from "../components/Card";

class Home extends React.Component {
  render() {
    return (
      <Consumer>
        {context => (
          <div>
            <div className="cards">
              {context.msList.map(ms => {
                return <Card key={ms.imdbID} data={ms} />;
              })}
            </div>
          </div>
        )}
      </Consumer>
    );
  }
}

export default Home;
