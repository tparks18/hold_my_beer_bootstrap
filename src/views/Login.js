import React from "react";
import beerpour from "../images/undraw_beer.svg";

const Login = () => {
  return (
    <div>
      <section className="vh-100">
        <div className="container py-5 h-90">
          <div className="row d-flex align-items-center justify-content-center h-100">
            <div className="col-md-8 col-lg-7 col-xl-6">
              <img
                src={beerpour}
                className="img-fluid rounded"
                alt="beer mountain"
              />
              
            </div>
            <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
              <h3 className="mb-4 pb-2 pb-md-0 mb-md-4">Login</h3>
              <form>
                <div style={{ marginTop: 15 }} className="row">
                  <div className="block standardized">
                    <div className="form-group">
                      <input
                        type="e-mail"
                        name="E-mail"
                        className="form-control"
                        placeholder="E-mail"
                      />
                    </div>
                  </div>
                </div>

                <div style={{ marginTop: 15 }} className="row">
                  <div className="block standardized">
                    <div className="form-group">
                      <input
                        type="password"
                        name="password"
                        className="form-control"
                        placeholder="Password"
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
                        className="btn btn-primary btn-lg btn-block"
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
      </section>
    </div>
  );
};

export default Login;
