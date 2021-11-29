import React from "react";

const Videos = () => {
  return (
    <div>
      <div className="heading">
        <h3>Video Gallery</h3>
      </div>
      {/* Modal gallery */}
      <section className>
        {/* Section: Images */}
        <section className>
          <div className="row">
            <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
              <div
                className="bg-image hover-overlay ripple shadow-1-strong rounded"
                data-ripple-color="light"
              >
                <img
                  src="https://mdbootstrap.com/img/screens/yt/screen-video-1.jpg"
                  className="w-100"
                />
                <a
                  href="#!"
                  data-mdb-toggle="modal"
                  data-mdb-target="#exampleModal1"
                >
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                  />
                </a>
                <div style={{ margin: 5 }}>Uploaded by: @handle</div>
              </div>
            </div>
            <div className="col-lg-4 mb-4 mb-lg-0">
              <div
                className="bg-image hover-overlay ripple shadow-1-strong rounded"
                data-ripple-color="light"
              >
                <img
                  src="https://mdbootstrap.com/img/screens/yt/screen-video-2.jpg"
                  className="w-100"
                />
                <a
                  href="#!"
                  data-mdb-toggle="modal"
                  data-mdb-target="#exampleModal2"
                >
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                  />
                </a>
                <div style={{ margin: 5 }}>Uploaded by: @handle</div>
              </div>
            </div>
            <div className="col-lg-4 mb-4 mb-lg-0">
              <div
                className="bg-image hover-overlay ripple shadow-1-strong rounded"
                data-ripple-color="light"
              >
                <img
                  src="https://mdbootstrap.com/img/screens/yt/screen-video-3.jpg"
                  className="w-100"
                />
                <a
                  href="#!"
                  data-mdb-toggle="modal"
                  data-mdb-target="#exampleModal3"
                >
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                  />
                </a>
                <div style={{ margin: 5 }}>Uploaded by: @handle</div>
              </div>
            </div>
          </div>
        </section>
        {/* Section: Images */}
        {/* Section: Modals */}
        <section className>
          {/* Modal 1 */}
          <div
            className="modal fade"
            id="exampleModal1"
            tabIndex={-1}
            aria-labelledby="exampleModal1Label"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-lg">
              <div className="modal-content">
                <div className="ratio ratio-16x9">
                  <iframe
                    src="https://www.youtube.com/embed/A3PDXmYoF5U"
                    title="YouTube video"
                    allowFullScreen
                  />
                </div>

                <div className="row justify-content-center">
                  <div className="text-center py-2 col-2">
                    <button type="button" className="btn btn-success">
                      <i
                        style={{ marginRight: 5 }}
                        class="fas fa-thumbs-up"
                      ></i>
                      Like
                    </button>
                  </div>

                  <div className="text-center py-2 col-2">
                    <button type="button" className="btn btn-danger">
                      <i
                        style={{ marginRight: 5 }}
                        class="fas fa-thumbs-down"
                      ></i>
                      Dislike
                    </button>
                  </div>
                </div>

                <div className="text-center py-2">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-mdb-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Modal 2 */}
          <div
            className="modal fade"
            id="exampleModal2"
            tabIndex={-1}
            aria-labelledby="exampleModal2Label"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-lg">
              <div className="modal-content">
                <div className="ratio ratio-16x9">
                  <iframe
                    src="https://www.youtube.com/embed/wTcNtgA6gHs"
                    title="YouTube video"
                    allowFullScreen
                  />
                </div>
                <div className="text-center py-3">
                  <div className="row justify-content-center">
                    <div className="text-center py-2 col-2">
                      <button type="button" className="btn btn-success">
                        <i
                          style={{ marginRight: 5 }}
                          class="fas fa-thumbs-up"
                        ></i>
                        Like
                      </button>
                    </div>

                    <div className="text-center py-2 col-2">
                      <button type="button" className="btn btn-danger">
                        <i
                          style={{ marginRight: 5 }}
                          class="fas fa-thumbs-down"
                        ></i>
                        Dislike
                      </button>
                    </div>
                  </div>

                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-mdb-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Modal 3 */}
          <div
            className="modal fade"
            id="exampleModal3"
            tabIndex={-1}
            aria-labelledby="exampleModal3Label"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-lg">
              <div className="modal-content">
                <div className="ratio ratio-16x9">
                  <iframe
                    src="https://www.youtube.com/embed/vlDzYIIOYmM"
                    title="YouTube video"
                    allowFullScreen
                  />
                </div>
                <div className="text-center py-3">
                  <div className="row justify-content-center">
                    <div className="text-center py-2 col-2">
                      <button type="button" className="btn btn-success">
                        <i
                          style={{ marginRight: 5 }}
                          class="fas fa-thumbs-up"
                        ></i>
                        Like
                      </button>
                    </div>

                    <div className="text-center py-2 col-2">
                      <button type="button" className="btn btn-danger">
                        <i
                          style={{ marginRight: 5 }}
                          class="fas fa-thumbs-down"
                        ></i>
                        Dislike
                      </button>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-mdb-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Section: Modals */}
      </section>
      {/* Modal gallery */}
    </div>
  );
};

export default Videos;
