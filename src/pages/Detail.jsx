import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { number } from "yup";

const Detail = () => {
  const [productDetail, setProductDetail] = useState({});
  console.log("productDetail", productDetail);
  //lấy giá trị từ thanh url thông qua param trên thẻ route
  const params = useParams();

  const getProductById = async () => {
    const res = await axios({
      url: `https://shop.cyberlearn.vn/api/Product/getbyid?id=${params.id}`,
      method: "GET",
    });
    setProductDetail(res.data.content);
  };

  useEffect(() => {
    //gọi api
    getProductById();
  }, [params.id]);
  return (
    <div className="container">
      <h3>Detail</h3>
      {/* <p>param:{params.id}</p> */}
      <div className="row">
        <div className="col-4">
          <img src={productDetail.image} alt="...." height={300} />
        </div>
        <div className="col-8">
          <h3>{productDetail.name}</h3>
          <p>{productDetail.description}</p>
          <div className="mt-2">
            {productDetail.size?.map((number) => {
              return (
                <button className="btn btn-outline-dark mx-2">{number}</button>
              );
            })}
          </div>
          <button className="btn btn-outline-dark mt-2">
            Add to cart <i className="fa fa-cart-plus"></i>
          </button>
        </div>
      </div>
      <h3 className="mt-2">Related Products</h3>
      <div className="row">
        {productDetail.relatedProducts?.map((prod) => {
          return (
            <div className="col-md-4">
              <div className="card">
                <img src={prod.image} alt="..." />
                <div className="card-body">
                  <h3>{prod.name}</h3>
                  <p>{prod.price}$</p>
                  <NavLink
                    className={"btn btn-outline-dark"}
                    to={`/detail/${prod.id}`}
                  >
                    View Detail
                  </NavLink>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Detail;
