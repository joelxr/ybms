import React from "react";
import { InfoOutline, HeartOutline } from "@forefront-ux/react-eva-icons";
import { Consumer } from "../Context";

class Card extends React.Component {
  state = { mouseOver: false };

  onMouseEnter = () => {
    this.setState({ mouseOver: true });
  };

  onMouseLeave = () => {
    this.setState({ mouseOver: false });
  };

  render() {
    const {
      data: { posterUrl, backdropUrl, title, releaseDate },
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
              {title} ({releaseDate.slice(0, 4)})
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
                onClick={context.handleFavoriteClick}
              >
                <HeartOutline />
                <span className="hint">Favorite</span>
              </button>
            </div>
          </div>
        )}
      </Consumer>
    );
  }
}

export default Card;
