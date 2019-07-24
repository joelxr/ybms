import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "./Context";
import { Router } from "@reach/router";
import Menu from "./components/Menu";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import About from "./pages/About";
import API from "./api";
import topMovies from "./const/topMovies";
import topSeries from "./const/topSeries";

import "@forefront-ux/react-eva-icons/index.css";
import "./style/main.scss";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      msList: []
    };
  }

  loadTopMovies() {
    topMovies.forEach(i => {
      API.get("", { params: { i } }).then(({ data }) => {
        this.setState({
          msList: [...this.state.msList, { Type: "Movie", ...data }]
        });
      });
    });
  }

  loadTopSeries() {
    topSeries.forEach(i => {
      API.get("", { params: { i } }).then(({ data }) => {
        this.setState({
          msList: [...this.state.msList, { type: "Series", ...data }]
        });
      });
    });
  }

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
