import React from "react";
import { useSelector } from "react-redux";
import { NavLink, useSearchParams } from "react-router-dom";
import { useFormik } from "formik";
import { history } from "../index";
// import { useSearchParams } from "react-router-dom";

const Header = () => {
  const [searchParam, setSearchParam] = useSearchParams();
  const { userLogin } = useSelector((state) => state.userReducer);
  console.log(userLogin);

  const frm = useFormik({
    initialValues: {
      keyword: "",
    },
    onSubmit: ({ keyword }) => {
      history.push(`/search?keyword=${keyword}`);
      // //đưa keyword lên url
      // setSearchParam({
      //   keyword,
      // });
    },
  });
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <NavLink className="navbar-brand" to="/">
        React Hook
      </NavLink>
      <button
        className="navbar-toggler d-lg-none"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapsibleNavId"
        aria-controls="collapsibleNavId"
        aria-expanded="false"
        aria-label="Toggle navigation"
      />
      <div className="collapse navbar-collapse" id="collapsibleNavId">
        <ul className="navbar-nav me-auto mt-2 mt-lg-0">
          <li className="nav-item">
            <NavLink
              className="nav-link active"
              to="trangchu"
              aria-current="page"
            >
              Home <span className="visually-hidden">(current)</span>
            </NavLink>
          </li>
          <li className="nav-item">
            {(() => {
              if (userLogin.email != "") {
                return (
                  <NavLink className="nav-link" to="/profile">
                    Hello {userLogin.email}
                  </NavLink>
                );
              }
              return (
                <NavLink className="nav-link" to="login">
                  Login
                </NavLink>
              );
            })()}
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="search">
              Search
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="antd-demo">
              Ant Design Demo
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="table-antd">
              Table antd
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="product-management">
              Product Management
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="hoc">
              HOC
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="container-component">
              Container Component
            </NavLink>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="dropdownId"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Hook
            </a>
            <div className="dropdown-menu" aria-labelledby="dropdownId">
              <NavLink className="dropdown-item" to="use-state-demo">
                UseState
              </NavLink>
              <NavLink className="dropdown-item" to="use-state-change-profile">
                UseState Change Profile
              </NavLink>
              <NavLink className="dropdown-item" to="use-effect-did-mount">
                Use Effect DidMount
              </NavLink>
              <NavLink className="dropdown-item" to="use-effect-did-update">
                Use Effect DidUpdate
              </NavLink>
              <NavLink className="dropdown-item" to="use-effect-unmount">
                Use Effect UnMount
              </NavLink>
              <NavLink className="dropdown-item" to="use-callback">
                Use Call Back
              </NavLink>
              <NavLink className="dropdown-item" to="use-memo">
                Use Memo
              </NavLink>
              <NavLink className="dropdown-item" to="use-ref">
                Use Ref
              </NavLink>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="dropdownId"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Redux Hook
            </a>
            <div className="dropdown-menu" aria-labelledby="dropdownId">
              <NavLink className="dropdown-item" to="use-redux-demo-chat">
                Demo chat
              </NavLink>
              <NavLink
                className="dropdown-item"
                to="use-redux-demo-change-fontsize"
              >
                Demo change fontsize
              </NavLink>
              <NavLink className="dropdown-item" to="use-redux-crud">
                Form Product
              </NavLink>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="dropdownId"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Lib hook
            </a>
            <div className="dropdown-menu" aria-labelledby="dropdownId">
              <NavLink className="dropdown-item" to="use-formik">
                Formik
              </NavLink>
            </div>
          </li>
        </ul>
        <form onSubmit={frm.handleSubmit} className="d-flex my-2 my-lg-0">
          <input
            name="keyword"
            onChange={frm.handleChange}
            className="form-control me-sm-2"
            type="text"
            placeholder="Search"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Header;
