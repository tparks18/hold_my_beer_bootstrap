import React from "react";
import beer from "../images/beer-unsplash.jpg";

const Register = () => {
  return (
    <section className="h-100 h-custom">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-8 col-xl-6">
            <div className="card rounded-3">
              <img
                src={beer}
                alt="beer"
                className="w-100"
                style={{
                  borderTopLeftRadius: ".3rem",
                  borderTopRightRadius: ".3rem",
                }}
              />
              <div className="card-body p-4 p-md-5">
                <h3 className="mb-4 pb-2 pb-md-0 mb-md-4">Register</h3>
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
                          type="text"
                          name="Username"
                          className="form-control"
                          placeholder="Username"
                        />
                      </div>
                    </div>
                    <div className="col-md-6 standardized">
                      <div className="form-group">
                        <input
                          type="e-mail"
                          name="email"
                          className="form-control"
                          placeholder="E-mail"
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

                  <div className="row">
                    <div className="col-md-12 standardized">
                      <div className="form-group">
                        <button
                          style={{ marginTop: 15 }}
                          type="submit"
                          className="btn btn-primary btn-block"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
