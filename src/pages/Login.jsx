import React from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate(); 
  const frmLogin = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (userLogin) => {
      console.log(userLogin);
      //xử lý đăng nhập
      if (userLogin.email === "admin" && userLogin.password === "123") {
        navigate("/profile");
      } else {
        alert("email or password is invalid");
        navigate("/forgotpassword");
      }
    },
  });

  return (
    <form onSubmit={frmLogin.handleSubmit} className="container">
      <h3>Login</h3>
      <div className="form-group">
        <p>Email</p>
        <input
          className="form-control"
          id="email"
          name="email"
          onChange={frmLogin.handleChange}
        />
      </div>
      <div className="form-group">
        <p>Password</p>
        <input
          className="form-control"
          id="password"
          name="password"
          onChange={frmLogin.handleChange}
        />
      </div>
      <div className="form-group">
        <button type="submit" className="btn btn-success">
          Login
        </button>
      </div>
    </form>
  );
};

export default Login;
