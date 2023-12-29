import axios from "axios";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { NavLink, useSearchParams } from "react-router-dom";
//gõ text => url
//get từ url => về component gọi appi

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [arrProduct, setArrProduct] = useState([]);

  const tukhoa = searchParams.get("keyword");

  const formSearch = useFormik({
    initialValues: {
      keyword: "",
    },
    onSubmit: ({ keyword }) => {
      console.log(keyword);
      //đưa từ khóa lên url
      setSearchParams({
        keyword: keyword,
      });
    },
  });
  const getProductByKeyword = async () => {
    //gọi api
    const res = await axios({
      url: `https://shop.cyberlearn.vn/api/Product?keyword=${tukhoa}`,
      method: "GET",
    });
    setArrProduct(res.data.content);
  };
  useEffect(() => {
    if (tukhoa == "") {
      // tukhoa = searchParams.get("keyword");
      formSearch.setFieldValue("keyword", setSearchParams.get("keyword"));
    }

    getProductByKeyword();
  }, [tukhoa]);
  return (
    <div className="container">
      <form className="frm-search mt-2" onSubmit={formSearch.handleSubmit}>
        <div className="input-group mb-3">
          <button className="btn btn-secondary">Search</button>
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="keyword"
              placeholder="keyword"
              name="keyword"
              onChange={formSearch.handleChange}
              value={formSearch.keyword}
            />
            <label htmlFor="keyword">search</label>
          </div>
        </div>
      </form>
      <h3 className="my-2">Search result</h3>
      <div className="container">
        <div className="row">
          {arrProduct.map((prod) => {
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
    </div>
  );
};

export default Search;
