import React, { useEffect, useState } from "react";
import UseGetApi from "../CustomHooks/UseGetApi";
import { NavLink } from "react-router-dom";

const TrangChu = () => {
  const data = UseGetApi("https://shop.cyberlearn.vn/api/Product");
  const arrProduct = data.content;
  return (
    <div className="container">
      <h3>Home</h3>
      <div className="row">
        {arrProduct?.map((prod) => {
          return (
            <div className="col-4 mt-2" key={prod.id}>
              <NavLink
                style={{ textDecoration: "none" }}
                to={`/detail/${prod.id}`}
                className="card"
              >
                <img src={prod.image} alt="123" />
                <div className="card-body">
                  <h3>{prod.name}</h3>
                  <p>{prod.price}</p>
                  <NavLink
                    className="btn btn-outline-dark"
                    to={`/detail/${prod.id}`}
                  >
                    View Detail
                  </NavLink>
                </div>
              </NavLink>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TrangChu;
