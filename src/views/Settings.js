import React from 'react'

const Settings = () => {
    return (
      <div>
        <h3>Settings</h3>
        <hr />
        <h5>Update Information</h5>
        <div className="col-md-6">
          <form>
            <div className="row">
              <div className="col-md-6 standardized">
                <div className="form-group">
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
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="Password"
                  />
                </div>
              </div>
              <div className="col-md-6 standardized">
                <div className="form-group">
                  <input
                    type="password"
                    name="confirm_password"
                    className="form-control"
                    placeholder="Confirm Password"
                  />
                </div>
              </div>
            </div>

            <div style={{ marginTop: 15 }} className="row">
              <div className="col-md-6 standardized">
                <div className="form-group">
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
                  <input
                    type="text"
                    name="Facebook"
                    className="form-control"
                    placeholder="Facebook"
                  />
                </div>
              </div>

              <div className="col-md-6 standardized">
                <div className="form-group">
                  <input
                    type="text"
                    name="About"
                    className="form-control"
                    placeholder="About"
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12 standardized">
                <div className="form-group">
                  <button
                    style={{ marginTop: 15 }}
                    type="submit"
                    className="btn btn-primary"
                  >
                    <i style={{ marginRight: 5 }} class="fas fa-edit"></i>
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
        <h3 style={{ marginTop: 30 }}>Voting History</h3>
        <hr />
      </div>
    );
}

export default Settings
