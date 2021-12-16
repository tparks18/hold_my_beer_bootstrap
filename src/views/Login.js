import React, {useState, useEffect} from "react";
import beerpour from "../images/undraw_beer.svg";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import {useLogin} from "../api/apiLogin"
import { Navigate } from "react-router";

const FormFieldElement = (props) => 
  (<div style={{ marginTop: 15 }} className="row">
    <div className="block standardized">
      <div className="form-group">
        {props.children}
      </div>
    </div>
  </div>)

const FormSubmitElement=(props)=>(
  <div className="row">
  <div className="col-md-12 standardized">
    <div className="form-group">
      {props.children}
    </div>
  </div>
</div>

)

const styles = {
    error: { color: "red" },
  };

const FormSchema = Yup.object().shape({
  email: Yup.string()
    .email("Must be a valid e-mail format")
    .required("Required"),
  password: Yup.string().required("Required"),
});

const initialValues = {
  email: "",
  password: "",
};


const Login = (props) => {
  const[creds, setCreds]=useState({})
  const login = useLogin(creds.email, creds.password)
  
  const handleSubmit = ({email, password})=>{  
    setCreds({"password":password,"email":email.toLowerCase()})
  }

  useEffect(
    ()=>{
      if (login.data?.token){
        props.setUser(login.data)
      }
      return ()=>{
        if (login.data?.token)props.setUser(login.data)
      }
    },[login.data, props])



  if (login.data?.token){return (<Navigate to="/"/>)}
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
              <Formik
                initialValues={initialValues}
                validationSchema={FormSchema}
                onSubmit={(values, {resetForm}) => {
                  handleSubmit(values);
                  resetForm(initialValues);
                }}
              >
                {({ errors, touched }) => (
                  <Form>
                    <FormFieldElement>
                      <>
                      <Field
                        type="e-mail"
                        name="email"
                        className="form-control"
                        placeholder="E-mail"
                      />
                      {errors.email && touched.email ? (
                        <div style={styles.error}>{errors.email}</div>
                      ) : null}
                      </>
                    </FormFieldElement>
            
                    <FormFieldElement>
                      <Field
                        type="password"
                        name="password"
                        className="form-control"
                        placeholder="Password"
                      />
                    </FormFieldElement>
                    
                    <FormSubmitElement>
                      <button
                        style={{ marginTop: 15 }}
                        type="submit"
                        className="btn btn-primary btn-lg btn-block"
                      >
                        Login
                      </button>
                      <div style={styles.error}>{login.error}</div>
                    </FormSubmitElement>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
