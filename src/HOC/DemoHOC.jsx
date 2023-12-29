import React, { Component } from "react";
import HOCModal from "./HOCModal";
import Login from "../pages/Login";
import Register from "../pages/Register";
import TrangChu from "../pages/TrangChu";
import Cart from "../pages/hooks/ExHookUseMemo/Cart";
import ClassHOCModal from "./ClassHOCModal";
const LoginHOCModal = HOCModal("Login", Login);
const HomeModal = HOCModal("Home", TrangChu);
const CartModal = HOCModal("Home", Cart);

export default class DemoHOC extends Component {
  state = {
    component: Login,
  };

  render() {
    const StateComponent = ClassHOCModal("title", this.state.component);
    return (
      <div className="container">
        <button
          type="button"
          className="btn btn-primary btn-lg"
          data-bs-toggle="modal"
          data-bs-target="#modalId"
          onClick={() => {
            this.setState({
              component: Login,
            });
          }}
        >
          Login
        </button>
        <button
          type="button"
          className="btn btn-success btn-lg"
          data-bs-toggle="modal"
          data-bs-target="#modalId"
          onClick={() => {
            this.setState({
              component: Register,
            });
          }}
        >
          Register
        </button>
        {/* <LoginHOCModal /> */}
        <StateComponent />
      </div>
    );
  }
}
