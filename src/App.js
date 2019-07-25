import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "./Context";
import { Router } from "@reach/router";
import Menu from "./components/Menu";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import MovieSeries from "./pages/MovieSeries";
import About from "./pages/About";
import { TMDB } from "./service/api";
import { parseMovie, parseSeries } from "./util/parse";
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

  loadAll() {
    let moviesList = [];
    let seriesList = [];
    let msList = JSON.parse(localStorage.getItem("msList"));

    if (msList && msList.length) {
      this.setState({ msList });
      return;
    }

    this.loadTopMovies().then(movies => {
      moviesList = movies.map(m => parseMovie(m.data));
      this.loadTopSeries().then(series => {
        seriesList = series.map(s => parseSeries(s.data));
        msList = [...moviesList, ...seriesList];
        localStorage.setItem("msList", JSON.stringify(msList));
        this.setState({ msList });
      });
    });
  }

  loadTopMovies() {
    let requests = [];

    topMovies.forEach(i => {
      requests.push(TMDB.get(`/movie/${i}`));
    });

    return Promise.all(requests);
  }

  loadTopSeries() {
    let requests = [];

    topSeries.forEach(i => {
      requests.push(TMDB.get(`/tv/${i}`));
    });

    return Promise.all(requests);
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
    this.loadAll();
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
              <MovieSeries path="/detail/:type/:id" />
            </Router>
          </div>
        </Provider>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
