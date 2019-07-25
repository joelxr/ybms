import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "./Context";
import { Router } from "@reach/router";
import Menu from "./components/Menu";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import About from "./pages/About";
import { TMDB } from "./service/api";
import topMovies from "./const/topMovies";
import topSeries from "./const/topSeries";

import "@forefront-ux/react-eva-icons/index.css";
import "./style/main.scss";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      msList: [],
      msFavored: [],
      msSelected: {},
      handleDetailClick: this.handleDetailClick,
      handleFavoriteClick: this.handleFavoriteClick,
      handleCloseSidebar: this.handleCloseSidebar
    };
  }

  parseMovie(movie) {
    return {
      type: "movie",
      id: movie.id,
      imdbId: movie.imdb_id,
      title: movie.title,
      releaseDate: movie.release_date,
      year: movie.release_date.slice(0, 4),
      posterUrl: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
      backdropUrl: `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`,
      description: movie.overview,
      runtime: `${movie.runtime} min`,
      rating: movie.popularity
    };
  }

  parseSeries(series) {
    return {
      type: "series",
      id: series.id,
      imdbId: series.imdb_id,
      title: series.name,
      releaseDate: series.first_air_date,
      year: series.first_air_date.slice(0, 4),
      posterUrl: `https://image.tmdb.org/t/p/w500/${series.poster_path}`,
      backdropUrl: `https://image.tmdb.org/t/p/original/${series.backdrop_path}`,
      description: series.overview,
      runtime: `${series.number_of_seasons} seasons, ${
        series.number_of_episodes
      } episodes, about ${series.episode_run_time[0]} min per episode`,
      rating: series.popularity
    };
  }

  loadTopMovies() {
    topMovies.forEach(i => {
      TMDB.get(`/movie/${i}`).then(({ data }) => {
        let movie = this.parseMovie(data);

        this.setState({
          msList: [...this.state.msList, movie]
        });
      });
    });
  }

  loadTopSeries() {
    topSeries.forEach(i => {
      TMDB.get(`/tv/${i}`).then(({ data }) => {
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

  handleFavoriteClick = ms => {
    let index = this.state.msFavored.findIndex(ms2 => ms.id === ms2.id);

    if (~index) {
      var newFavoredList = this.state.msFavored;
      newFavoredList.splice(index, 1);

      this.setState({
        msFavored: newFavoredList
      });
    } else {
      this.setState({
        msFavored: [...this.state.msFavored, ms]
      });
    }
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
