import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "./Context";
import { Router } from "@reach/router";
import Menu from "./components/Menu";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import About from "./pages/About";
import { API } from "./api";
import topMovies from "./const/topMovies";
import topSeries from "./const/topSeries";

import "@forefront-ux/react-eva-icons/index.css";
import "./style/main.scss";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      msList: [],
      msSelected: {},
      handleDetailClick: this.handleDetailClick,
      handleFavoriteClick: this.hnadleFavoriteClick,
      handleCloseSidebar: this.handleCloseSidebar
    };
  }

  parseMovie(movie) {
    return {
      type: "movie",
      id: movie.id,
      title: movie.title,
      releaseDate: movie.release_date,
      posterUrl: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
      backdropUrl: `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`
    };
  }

  parseSeries(series) {
    return {
      type: "series",
      id: series.id,
      title: series.name,
      releaseDate: series.first_air_date,
      posterUrl: `https://image.tmdb.org/t/p/w500/${series.poster_path}`,
      backdropUrl: `https://image.tmdb.org/t/p/original/${series.backdrop_path}`
    };
  }

  loadTopMovies() {
    topMovies.forEach(i => {
      API.get(`/movie/${i}`).then(({ data }) => {
        this.setState({
          msList: [...this.state.msList, this.parseMovie(data)]
        });
      });
    });
  }

  loadTopSeries() {
    topSeries.forEach(i => {
      API.get(`/tv/${i}`).then(({ data }) => {
        this.setState({
          msList: [...this.state.msList, this.parseSeries(data)]
        });
      });
    });
  }

  handleDetailClick = ms => {
    this.setState({
      msSelected: ms
    });
  };

  handleFavoriteClick = event => {
    console.log(event);
  };

  handleCloseSidebar = () => {
    this.setState({
      msSelected: {}
    });
  };

  componentDidMount() {
    this.loadTopMovies();
    this.loadTopSeries();
  }

  render() {
    return (
      <div>
        <Provider value={this.state}>
          <Menu />
          <div className="content">
            <Router>
              <Home path="/" />
              <Favorites path="/favorites" />
              <About path="/about" />
            </Router>
          </div>
        </Provider>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
