import "./index.css";

function Navigation() {
  return (
    <div className="fullNavBar">
      <nav class="navbar navbar-expand-lg navbar-light bg-white">
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
                class="nav-link dropdown-toggle"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
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
                  Illustration
                </a>
                <a class="dropdown-item" href="/animation">
                  Character Design/Animation
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
  );
}

export default Navigation;
