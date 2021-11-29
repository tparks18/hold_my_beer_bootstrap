import React from "react";

const VotingHistory = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-10 col-xl-8 mx-auto">
          <h2 className="h3 mb-4 page-title">Settings</h2>
          <div className="my-4">
            <ul className="nav nav-tabs mb-4" id="myTab" role="tablist">
              <li className="nav-item">
                <a
                  className="nav-link"
                  data-toggle="tab"
                  role="tab"
                  href="/settings"
                  aria-selected="false"
                >
                  Profile
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link active"
                  id="home-tab"
                  data-toggle="tab"
                  href="/votinghistory"
                  role="tab"
                  aria-controls="home"
                  aria-selected="false"
                >
                  Voting History
                </a>
              </li>
            </ul>
            <h2 className="h3 mb-4 page-title">Voting History</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VotingHistory;
