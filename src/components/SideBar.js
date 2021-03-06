import React from "react";
import { Consumer } from "../Context";
import {
  CloseOutline,
  ClockOutline,
  AwardOutline,
  HeartOutline,
  EyeOutline,
  Heart
} from "@forefront-ux/react-eva-icons";
import { Link } from "@reach/router";

class SideBar extends React.Component {
  shortenDescription(description) {
    if (!description) return "";

    if (description.length > 130) {
      return description.slice(0, 127) + "...";
    }

    return description;
  }

  render() {
    return (
      <Consumer>
        {context => {
          return (
            <div
              className={
                Object.keys(context.msSelected).length
                  ? "sidebar active"
                  : "sidebar hidden"
              }
            >
              <div className="body">
                <button
                  className="closeBtn"
                  type="button"
                  onClick={context.handleCloseSidebar}
                >
                  <CloseOutline />
                </button>

                <div className="header">
                  <img
                    className="backdrop"
                    alt="backdrop"
                    src={context.msSelected.backdropUrl}
                  ></img>

                  <div className="headerContent">
                    <img
                      className="poster"
                      alt="poster"
                      src={context.msSelected.posterUrl}
                    ></img>

                    <div className="headerTitle">
                      {context.msSelected.title}
                      <div className="headerSubtitle">
                        {context.msSelected.year}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="content">
                  <div className="contentDescription">
                    {this.shortenDescription(context.msSelected.description)}
                  </div>
                  <div className="contentInfoWrapper">
                    <div className="contentInfo">
                      <ClockOutline />
                      {context.msSelected.runtime}
                    </div>
                    <div className="contentInfo">
                      <AwardOutline />
                      {context.msSelected.rating}
                    </div>
                  </div>
                </div>

                <div className="footer">
                  {(() => {
                    if (context.msFavored.includes(context.msSelected))
                      return (
                        <button
                          type="button"
                          className="btn liked"
                          onClick={() =>
                            context.handleFavoriteClick(context.msSelected)
                          }
                        >
                          <Heart />
                          <span className="hint"> Favorite</span>
                        </button>
                      );
                    else
                      return (
                        <button
                          type="button"
                          className="btn"
                          onClick={() =>
                            context.handleFavoriteClick(context.msSelected)
                          }
                        >
                          <HeartOutline />
                          <span className="hint"> Favorite</span>
                        </button>
                      );
                  })()}

                  <Link
                    type="button"
                    className="btn"
                    to={`/detail/${context.msSelected.type}/${context.msSelected.id}`}
                  >
                    <EyeOutline />
                    <span className="hint">More details</span>
                  </Link>
                </div>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default SideBar;
