import React from 'react'
import undrawsvg from "../images/undraw_having_beer.svg";

const LandingPage = () => {
    return (
      <div>
        <div className="big-container">
          <div className="landing-image-container">
            <img src={undrawsvg} alt="beer" />
          </div>
          <div className="text1 center-text">
            <i className="fas fa-upload fa-2x"></i>
            <h1 className="slogan">Upload</h1>
            <div className="center-text"></div>
          </div>
          <div className="text2 center-text">
            <i class="fas fa-thumbs-up fa-2x"></i>
            <h1 className="slogan">Vote</h1>
          </div>
          <div className="text3 center-text">
            <i class="fas fa-users fa-2x"></i>
            <h1 className="slogan">Be Discovered</h1>
          </div>
        </div>
      </div>
    );
}

export default LandingPage
