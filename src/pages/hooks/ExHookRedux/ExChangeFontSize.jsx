import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeFontsizeAction } from "../../../redux/Reducer/ChangeFontsizeReducer";
const ExChangeFontSize = () => {
  const { fSize } = useSelector((state) => state.changeFontsizeReducer);
  const dispatch = useDispatch();
  const handleChangeFontSize = (size) => {
    const action = changeFontsizeAction(size);
    dispatch(action);
  };

  const handleChangeFontsize = (e) => {};
  return (
    <div className="container">
      <h3>Change Fontsize</h3>
      <p style={{ fontSize: fSize }}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto
        dignissimos, aut corporis quis cum commodi molestias possimus culpa
        optio quam.
      </p>
      <button
        className="btn btn-danger m-2"
        onClick={() => {
          handleChangeFontSize(-1);
        }}
      >
        -
      </button>
      <button
        className="btn btn-primary m-2"
        onClick={() => {
          handleChangeFontSize(1);
        }}
      >
        +
      </button>
    </div>
  );
};

export default ExChangeFontSize;
