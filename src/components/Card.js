import React from "react";
import {
  InfoOutline,
  HeartOutline,
  Heart
} from "@forefront-ux/react-eva-icons";
import { Consumer } from "../Context";

class Card extends React.Component {
  state = { mouseOver: false };

  onMouseEnter = () => {
    this.setState({ mouseOver: true });
  };

  onMouseLeave = () => {
    this.setState({ mouseOver: false });
  };

  isFavored = (msFavored, id) => {
    const index = msFavored.findIndex(ms => ms.id === id);
    return ~index;
  };

  render() {
    const {
      data: { posterUrl, backdropUrl, title, year },
      index
    } = this.props;

    return (
      <Consumer>
        {context => (
          <div
            className={this.state.mouseOver ? "card active" : "card"}
            onMouseEnter={this.onMouseEnter}
            onMouseLeave={this.onMouseLeave}
          >
            <div className="cover">
              <img
                src={index === 0 ? `${backdropUrl}` : `${posterUrl}`}
                alt="Poster"
              />
            </div>
            <div className="title">
              {title} ({year})
            </div>
            <div className="btns">
              <button
                type="button"
                className="btn"
                onClick={() => context.handleDetailClick(this.props.data)}
              >
                <InfoOutline />
                <span className="hint">Details</span>
              </button>
              <button
                type="button"
                className="btn"
                onClick={() => context.handleFavoriteClick(this.props.data)}
              >
                {(() => {
                  if (context.msFavored.includes(this.props.data))
                    return (
                      <span style={{ fill: "#E53E3E" }}>
                        <Heart />
                        <span className="hint"> Favorite</span>
                      </span>
                    );
                  else
                    return (
                      <span>
                        <HeartOutline />
                        <span className="hint"> Favorite</span>
                      </span>
                    );
                })()}
              </button>
            </div>
          </div>
        )}
      </Consumer>
    );
  }
}

export default Card;
