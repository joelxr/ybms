import React from "react";
import { Consumer } from "../Context";
import { CloseOutline } from "@forefront-ux/react-eva-icons";

class SideBar extends React.Component {
  render() {
    return (
      <Consumer>
        {context => {
          if (!Object.keys(context.msSelected).length) {
            return;
          } else {
            return (
              <div className="sidebar">
                <button
                  className="closeBtn"
                  type="button"
                  onClick={context.handleCloseSidebar}
                >
                  <CloseOutline />
                </button>
              </div>
            );
          }
        }}
      </Consumer>
    );
  }
}

export default SideBar;
