import React, { useState } from "react";
import ModalContainer from "./ModalContainer";
import Login from "../../pages/Login";
import Register from "../../pages/Register";

const DemoContainerComponent = (props) => {
  const [component, setComponent] = useState(<Login />);
  return (
    <div>
      <button
        type="button"
        className="btn btn-primary btn-lg"
        data-bs-toggle="modal"
        data-bs-target="#modalId"
        onClick={() => {
          setComponent(<Login />);
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
          setComponent(<Register />);
        }}
      >
        Register
      </button>
      <ModalContainer title="" Component={component} />
    </div>
  );
};

export default DemoContainerComponent;
