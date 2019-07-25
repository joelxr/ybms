/* eslint-disable jsx-a11y/media-has-caption */
import React from "react";
import { Consumer } from "../Context";
import { TMDB } from "../service/api";
import {
  ClockOutline,
  AwardOutline,
  HeartOutline,
  Heart
} from "@forefront-ux/react-eva-icons";
import { parseMovie, parseSeries } from "../util/parse";

class Movie extends React.Component {
  state = { ms: {} };

  componentDidMount() {
    this.loadMovieSeries(this.props).then(res => {
      let data = res.map(r => r.data);
      let ms =
        this.props.type === "movie"
          ? parseMovie(data[0])
          : parseSeries(data[0]);

      ms.credits = data[1];
      ms.reviews = data[2];
      ms.videos = data[3];
      this.setState({ ms });
    });
  }

  loadMovieSeries({ type, id }) {
    type = type === "movie" ? type : "tv";

    return Promise.all([
      TMDB.get(`/${type}/${id}`),
      TMDB.get(`/${type}/${id}/credits`),
      TMDB.get(`/${type}/${id}/reviews`, { params: { total_results: 3 } }),
      TMDB.get(`/${type}/${id}/videos`)
    ]);
  }

  render() {
    const ms = this.state.ms;

    return (
      <Consumer>
        {context => (
          <div className="ms">
            <div className="header">
              <img
                className="backdrop"
                alt="backdrop"
                src={ms.backdropUrl}
              ></img>

              <div className="headerContent">
                <img className="poster" alt="poster" src={ms.posterUrl}></img>

                <div className="headerTitle">
                  {ms.title}
                  <div className="headerSubtitle">{ms.year}</div>
                </div>

                {(() => {
                  if (context.msFavored.includes(ms))
                    return (
                      <button
                        type="button"
                        className="btn liked"
                        onClick={() => context.handleFavoriteClick(ms)}
                      >
                        <Heart />
                      </button>
                    );
                  else
                    return (
                      <button
                        type="button"
                        className="btn"
                        onClick={() => context.handleFavoriteClick(ms)}
                      >
                        <HeartOutline />
                      </button>
                    );
                })()}
              </div>
            </div>

            <div className="content">
              <h2>Description</h2>
              <div className="contentDescription">{ms.description}</div>
              <div className="contentInfoWrapper">
                <div className="contentInfo">
                  <ClockOutline />
                  {ms.runtime}
                </div>
                <div className="contentInfo">
                  <AwardOutline />
                  {ms.rating}
                </div>
              </div>
              <h2>Cast</h2>
              <div className="cast">
                {ms.credits
                  ? ms.credits.cast.map(c => {
                      return (
                        <div key={c.cast_id} className="castItem">
                          <div className="avatar">
                            <img
                              alt="avatar"
                              src={`https://image.tmdb.org/t/p/w500/${c.profile_path}`}
                            ></img>
                          </div>
                          <div className="info">
                            <div className="character"> {c.character}</div>
                            <div className="name">{c.name}</div>
                          </div>
                        </div>
                      );
                    })
                  : ""}
              </div>
              {ms.reviews && ms.reviews.results.length ? (
                <div>
                  <h2>Reviews</h2>
                  <div className="reviews">
                    {ms.reviews.results.map(r => {
                      return (
                        <div key={r.id} className="review">
                          <div className="reviewText">
                            {(() => r.content.slice(0, 400) + "...")()}
                          </div>
                          <div className="reviewAuthor">{r.author}</div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ) : (
                ""
              )}
              {ms.videos && ms.videos.results.length ? (
                <div>
                  <h2>Videos</h2>
                  <div className="videos">
                    {ms.videos.results.map(v => {
                      return (
                        <div key={v.id} className="video">
                          <iframe
                            title={v.name}
                            id="ytplayer"
                            type="text/html"
                            width="320"
                            height="180"
                            src={`http://www.youtube.com/embed/${v.key}?autoplay=0`}
                            frameBorder="0"
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        )}
      </Consumer>
    );
  }
}

export default Movie;
