import React from "react";

const Newsfeed = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-7 col-xs-12 col-md-offset-3">
          <div className="panel" id="daily-feed">
            <div className="panel-heading">
              <h3 className="panel-title">Daily feed</h3>
            </div>
            <div className="panel-body">
              {/* style={{ marginLeft: 10 }} */}
              <ul className="list-group list-group-dividered list-group-full">
                <li className="list-group-item">
                  <div className="media">
                    <div className="media-body">
                      <small className="float-end">2h ago</small>
                      <h4 className="media-heading">
                        <a className="name">First Last</a> made a new post.
                      </h4>
                      <div>This is my blog post.</div>
                      <small>Today 2:55 pm - 11.28.2021</small>
                      <div className="actions margin-top-10">
                        <button
                          type="button"
                          className="btn btn-danger btn-xs waves-effect waves-light"
                        >
                          <i
                            style={{ marginRight: 5 }}
                            class="fas fa-thumbs-up"
                          ></i>
                          Like
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsfeed;
