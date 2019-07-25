import React from "react";
import { Consumer } from "../Context";
import { Link } from "@reach/router";

const NavLink = props => (
  <Link
    {...props}
    getProps={({ isCurrent }) => {
      return {
        className: isCurrent ? "link active" : "link"
      };
    }}
  />
);

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
              <NavLink className="link" to="/">
                Home
              </NavLink>
              <NavLink className="link" to="/favorites">
                Favorites
              </NavLink>
              <NavLink className="link" to="/about">
                About
              </NavLink>
            </div>
          </div>
        )}
      </Consumer>
    );
  }
}

export default Menu;
