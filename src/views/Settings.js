import React from 'react'

const Settings = () => {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10 col-xl-8 mx-auto">
            <h2 className="h3 mb-4 page-title">Settings</h2>
            <div className="my-4">
              <ul className="nav nav-tabs mb-4" id="myTab" role="tablist">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    id="home-tab"
                    data-toggle="tab"
                    href="#home"
                    role="tab"
                    aria-controls="home"
                    aria-selected="false"
                  >
                    Profile
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="home-tab"
                    data-toggle="tab"
                    href="#home"
                    role="tab"
                    aria-controls="home"
                    aria-selected="false"
                  >
                    Voting History
                  </a>
                </li>
              </ul>
              <form>
                <div className="row mt-5 align-items-center">
                  <div className="col-md-3 text-center mb-5">
                    <i class="fas fa-user-ninja fa-5x"></i>
                    <div>profile pic here</div>
                  </div>
                  <div className="col">
                    <div className="row align-items-center">
                      <div className="col-md-7">
                        <h4 className="mb-1">Name</h4>
                        <p className="small mb-3">
                          <span className="badge badge-dark">Location</span>
                        </p>
                      </div>
                    </div>
                    <div className="row mb-4">
                      <div className="col-md-7">
                        <p className="text-muted">
                          This is my about me. I'm here to prove that I am the
                          most badass.
                        </p>
                      </div>
                      <div className="col">
                        <button type="button" className="btn btn-primary">
                          <i style={{ marginRight: 5 }} class="fas fa-edit"></i>
                          Edit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <hr className="my-4" />

                <div className="row">
                  <div className="col-md-6 standardized">
                    <div className="form-group">
                      <label htmlFor="name">Name</label>
                      <input
                        type="text"
                        name="Name"
                        className="form-control"
                        placeholder="Name"
                      />
                    </div>
                  </div>
                  <div className="col-md-6 standardized">
                    <div className="form-group">
                      <label htmlFor="location">Location</label>
                      <input
                        type="text"
                        name="Location"
                        className="form-control"
                        placeholder="Location"
                      />
                    </div>
                  </div>
                </div>

                <div style={{ marginTop: 15 }} className="row">
                  <div className="col-md-6 standardized">
                    <div className="form-group">
                      <label htmlFor="twitter">Twitter</label>
                      <input
                        type="text"
                        name="Twitter"
                        className="form-control"
                        placeholder="Twitter"
                      />
                    </div>
                  </div>
                  <div className="col-md-6 standardized">
                    <div className="form-group">
                      <label htmlFor="instagram">Instagram</label>
                      <input
                        type="text"
                        name="Instagram"
                        className="form-control"
                        placeholder="Instagram"
                      />
                    </div>
                  </div>
                </div>

                <div style={{ marginTop: 15 }} className="row">
                  <div className="col-md-6 standardized">
                    <div className="form-group">
                      <label htmlFor="facebook">Facebook</label>
                      <input
                        type="text"
                        name="Facebook"
                        className="form-control"
                        placeholder="Facebook"
                      />
                    </div>
                  </div>
                </div>

                <hr className="my-4" />
                <div className="row mb-4">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="inputPassword5">New Password</label>
                      <input
                        type="password"
                        className="form-control"
                        id="inputPassword5"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="inputPassword6">Confirm Password</label>
                      <input
                        type="password"
                        className="form-control"
                        id="inputPassword6"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <p className="mb-2">Password requirements</p>
                    <p className="small text-muted mb-2">
                      To create a new password, you have to meet all of the
                      following requirements:
                    </p>
                    <ul className="small text-muted pl-4 mb-0">
                      <li>Minimum 5 characters</li>
                      <li>Can’t be the same as a previous password</li>
                    </ul>
                  </div>
                </div>
                <button type="submit" className="btn btn-primary">
                  Save Changes
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Settings
