import React from "react";
import { InfoOutline, HeartOutline } from "@forefront-ux/react-eva-icons";

class Card extends React.Component {
  state = { mouseOver: false };

  onMouseEnter = () => {
    this.setState({ mouseOver: true });
  };

  onMouseLeave = () => {
    this.setState({ mouseOver: false });
  };

  render() {
    const { Poster, Title } = this.props.data;

    return (
      <div
        className={this.state.mouseOver ? "card active" : "card"}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
      >
        <div className="cover">
          <img src={Poster} alt="Poster" />
        </div>
        <div className="title">{Title}</div>
        <div className="btns">
          <button type="button" className="btn">
            <InfoOutline />
            <span className="hint">Details</span>
          </button>
          <button type="button" className="btn">
            <HeartOutline />
            <span className="hint">Favorite</span>
          </button>
        </div>
      </div>
    );
  }
}

export default Card;
