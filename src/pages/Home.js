import React from "react";
import {
  FilmOutline,
  TvOutline,
  ArrowDownwardOutline,
  ArrowUpwardOutline,
  MinusOutline
} from "@forefront-ux/react-eva-icons";
import { Consumer } from "../Context";
import Card from "../components/Card";
import SideBar from "../components/SideBar";

class Home extends React.Component {
  state = { type: "movie", sorting: { prop: "Released", order: "ASC" } };

  onToggleContent = type => {
    this.setState({ type });
  };

  onSetSortOrder = () => {
    switch (this.state.sorting.order) {
      case "ASC":
        this.setState({ sorting: { prop: "Released", order: "DESC" } });
        break;
      case "DESC":
        this.setState({ sorting: { prop: "Released", order: "" } });
        break;
      default:
        this.setState({ sorting: { prop: "Released", order: "ASC" } });
    }
  };

  sortContent = (ms1, ms2) => {
    const value1 = new Date(ms1[this.state.sorting.prop]);
    const value2 = new Date(ms2[this.state.sorting.prop]);

    if (this.state.sorting.order === "ASC") {
      return value1 > value2;
    } else if (this.state.sorting.order === "DESC") {
      return value1 < value2;
    } else {
      return;
    }
  };

  render() {
    return (
      <Consumer>
        {context => (
          <div>
            <div className="toolbar">
              <div className="contentToggle">
                <button
                  type="buttom"
                  className={this.state.type === "movie" ? "btn active" : "btn"}
                  onClick={() => this.onToggleContent("movie")}
                >
                  <FilmOutline />
                  <span className="hint">Movies</span>
                </button>
                <button
                  type="buttom"
                  className={
                    this.state.type === "series" ? "btn active" : "btn"
                  }
                  onClick={() => this.onToggleContent("series")}
                >
                  <TvOutline />
                  <span className="hint">Series</span>
                </button>
              </div>
              <button
                type="button"
                className="btn sorting"
                onClick={this.onSetSortOrder}
              >
                {(() => {
                  switch (this.state.sorting.order) {
                    case "ASC":
                      return <ArrowUpwardOutline />;
                    case "DESC":
                      return <ArrowDownwardOutline />;
                    default:
                      return <MinusOutline />;
                  }
                })()}
                <span className="hint">Released date</span>
              </button>
            </div>
            <div className="cards">
              {context.msList
                .filter(ms => ms.Type === this.state.type)
                .sort(this.sortContent)
                .map(ms => (
                  <Card key={ms.imdbID} data={ms} />
                ))}
            </div>
            <div>
              <SideBar />
            </div>
          </div>
        )}
      </Consumer>
    );
  }
}

export default Home;
