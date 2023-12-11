import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";

const ExHookFormik = () => {
  const frmRegister = useFormik({
    initialValues: {
      fullName: "",
      phone: "",
      password: "",
      email: "",
    },
    validationSchema: yup.object().shape({
      fullName: yup.string().required("fullname cannot be blank!"),
      phone: yup
        .string()
        .required("phone cannot be blank!")
        .min(6, "phải lớn hơn 6 ký tự")
        .max(10, "phải bé hơn 10 ký tự"),
      email: yup
        .string()
        .required("email cannot be blank!")
        .email("email is invalid")
        .matches(/@cybersoft/, "phải là @cybersoft"),
    }),
    onSubmit: (value) => {
      console.log(value);
    },
  });

  return (
    <form className="container" onSubmit={frmRegister.handleSubmit}>
      <h3>Register</h3>
      <div className="form-group">
        <p>Full Name</p>
        <input
          name="fullName"
          id="fullName"
          className="form-control"
          onChange={frmRegister.handleChange}
          onBlur={frmRegister.handleBlur}
        />
        <p className="text text-danger">
          {frmRegister.errors.fullName && frmRegister.errors.fullName}
        </p>
      </div>
      <div className="form-group">
        <p>Phone</p>
        <input
          name="phone"
          id="phone"
          className="form-control"
          onChange={frmRegister.handleChange}
          onBlur={frmRegister.handleBlur}
        />
        <p className="text text-danger">
          {frmRegister.errors.phone && frmRegister.errors.phone}
        </p>
      </div>
      <div className="form-group">
        <p>Email</p>
        <input
          name="email"
          id="email"
          className="form-control"
          onChange={frmRegister.handleChange}
          onBlur={frmRegister.handleBlur}
        />
        <p className="text text-danger">
          {frmRegister.errors.email && frmRegister.errors.email}
        </p>
      </div>
      <div className="form-group">
        <p>Password</p>
        <input
          name="password"
          id="password"
          className="form-control"
          onChange={frmRegister.handleChange}
        />
      </div>
      <div className="form-group my-2">
        <button className="btn btn-outline-dark" type="submit">
          Register
        </button>
      </div>
    </form>
  );
};

export default ExHookFormik;
