import React from "react";
import { Consumer } from "../Context";

class About extends React.Component {
  render() {
    return (
      <Consumer>
        {() => (
          <div className="about">
            <div className="aboutContent">
              <h1>About the YBMS</h1>
              <p>
                This is YBMS (Your Beloved Movies and Series), here you can
                easilly have a list of your top movies and TV Series and create
                a list of favourites.
              </p>
              <p>
                Besides that, you can see all important data about the movie and
                TV serie you like.
              </p>

              <h1>About the author</h1>
              <p>
                I'm <u>Joel Rocha</u> and I like to create WEB sites like this.
                I've been a developer for over ten years and I'm always looking
                foward to work on challeging projects.
              </p>
            </div>
          </div>
        )}
      </Consumer>
    );
  }
}

export default About;
