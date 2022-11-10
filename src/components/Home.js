import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="bodyBody">
      <div className="homeBody">
        <div style={{ position: "sticky", top: "0", zIndex: "100" }}>
          <div className="fullNavBarHome">
            <nav class="navbar navbar-expand-lg navbar-dark homeNav">
              <a class="navbar-brand" href="/">
                <img
                  className="Header-logo"
                  src="/images/logo.png"
                  width="100px"
                  alt="HOME"
                />
              </a>
              <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>

              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                  <li class="nav-item">
                    <a class="nav-link" href="/">
                      Home
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/about">
                      About
                    </a>
                  </li>
                  <li class="nav-item dropdown">
                    <a
                      href="/art"
                      class="nav-link dropdown-toggle"
                      id="navbarDropdownMenuLink"
                      data-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Art
                    </a>
                    <div
                      class="dropdown-menu"
                      aria-labelledby="navbarDropdownMenuLink"
                    >
                      <a class="dropdown-item" href="/art">
                        Home
                      </a>
                      <a class="dropdown-item" href="/design">
                        Design
                      </a>
                      <a class="dropdown-item" href="/illustration">
                        Illustration/Character Design
                      </a>
                      <a class="dropdown-item" href="/animation">
                        Animation
                      </a>
                    </div>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/computerscience">
                      Computer Science
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
        <div className="textBody">
          <div className="textInfo">
            <h1>Jessica Mei Chin</h1>
            <h4>SOFTWARE ENGINEER AND ARTIST</h4>

            <p className="introText" id="introText">
              I go by Jessie! I'm a developer and artist from Brooklyn, NY.
            </p>

            <p className="introText" id="introText">
              On the technical side, I gravitate towards frontend development
              and human computer interaction. On the artistic side, I create
              illustrations, characters, designs, and animations.
            </p>
            <div className="socials">
              <a
                className="linkedIn"
                href="https://www.linkedin.com/in/jessica-mei-chin/"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              &nbsp;
              <a className="linkedIn" href="https://github.com/jessiemmm">
                <i className="fab fa-github"></i>
              </a>
            </div>
            <br></br>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
