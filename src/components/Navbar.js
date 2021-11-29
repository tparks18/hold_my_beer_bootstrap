import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav
        style={{ marginBottom: 20 }}
        className="navbar navbar-expand-lg navbar-dark bg-primary"
      >
        <a style={{ marginLeft: 20 }} className="navbar-brand" href="/">
          Hold My Beer 🍺
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/videos">
                Videos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/newsfeed">
                Newsfeed
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                //   href="/"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Account
              </a>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <a className="dropdown-item" href="/profile">
                  Profile
                </a>
                <a className="dropdown-item" href="/myposts">
                  My Posts
                </a>

                <a className="dropdown-item" href="/votinghistory">
                  Voting History
                </a>

                <a className="dropdown-item" href="/profile">
                  My Videos
                </a>
                <a className="dropdown-item" href="/settings">
                  Settings
                </a>
                <a className="dropdown-item" href="/logout">
                  Logout
                </a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
