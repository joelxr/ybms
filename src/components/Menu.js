import React from "react";
import { Consumer } from "../Context";
import { Link } from "@reach/router";

class Menu extends React.Component {
  render() {
    return (
      <Consumer>
        {() => (
          <div className="menu">
            <div className="left">
              <div className="title">ybms</div>
              <div className="subtitle">Your beloved movies and series</div>
            </div>
            <div className="right">
              <Link className="link" to="/">
                Home
              </Link>
              <Link className="link" to="/favorites">
                Favorites
              </Link>
              <Link className="link" to="/about">
                About
              </Link>
            </div>
          </div>
        )}
      </Consumer>
    );
  }
}

export default Menu;
