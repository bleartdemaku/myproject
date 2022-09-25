import React from "react";
import Footer from "../../components/Footer/Footer";
import NavbarBootstrap from "../../components/Navbar/NavbarBootstrap";
import { Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { conntactSchema } from "../../validations/ContactValidation";
import "./Contact.scss";

function Contact() {
  const navigate = useNavigate();
  return (
    <>
      <NavbarBootstrap />
      <div>
        {/* Wrapping form inside formik tag and passing our schema to validationSchema prop */}
        <Formik
          validationSchema={conntactSchema}
          initialValues={{ email: "", lastname: "", password: "", comment: "" }}
          onSubmit={(values) => {
            // Alert the input values of the form that we filled
            alert(JSON.stringify(values));

            navigate("/home");
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => (
            <div className="contact">
              <div className="form">
                {/* Passing handleSubmit parameter tohtml form onSubmit property */}
                <form noValidate onSubmit={handleSubmit}>
                  <span>Contact Us</span>
                  {/* Our input html with passing formik parameters like handleChange, values, handleBlur to input properties */}
                  <input
                    type="text"
                    name="name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                    placeholder="Enter your name here!"
                    className="form-control inp_text"
                    id="name"
                  />
                  {/* If validation is not passed show errors */}
                  <p className="error">
                    {errors.name && touched.name && errors.name}
                  </p>

                  {/* Our input html with passing formik parameters like handleChange, values, handleBlur to input properties */}
                  <input
                    type="text"
                    name="lastname"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.lastname}
                    placeholder="Enter your lastname here!"
                    className="form-control inp_text"
                    id="lastname"
                  />
                  {/* If validation is not passed show errors */}
                  <p className="error">
                    {errors.lastname && touched.lastname && errors.lastname}
                  </p>

                  {/* Our input html with passing formik parameters like handleChange, values, handleBlur to input properties */}
                  <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    placeholder="Enter email id / username"
                    className="form-control inp_text"
                    id="email"
                  />
                  {/* If validation is not passed show errors */}
                  <p className="error">
                    {errors.email && touched.email && errors.email}
                  </p>

                  {/* Our input html with passing formik parameters like handleChange, values, handleBlur to input properties */}
                  <input
                    type="password"
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    placeholder="Enter password"
                    className="form-control"
                  />
                  {/* If validation is not passed show errors */}
                  <p className="error">
                    {errors.password && touched.password && errors.password}
                  </p>

                  <textarea
                    name="comment"
                    id="comment"
                    cols="10"
                    rows="10"
                    placeholder="Enter your comment here!"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.comment}
                    className="form-control"
                  ></textarea>
                  <p className="error">
                    {errors.comment && touched.comment && errors.comment}
                  </p>

                  {/* Click on submit button to submit the form */}
                  <button type="submit">Submit</button>
                </form>
              </div>
            </div>
          )}
        </Formik>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
