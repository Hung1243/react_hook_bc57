import React, { useDebugValue, useEffect, useState } from "react";
import axios from "axios";

const UseEffect_DidMount = () => {
  const [number, setNumber] = useState(1);
  const [arrProduct, setArrProduct] = useState([]);

  console.log("render123");
  useEffect(() => {
    // console.log("lần 1:chạy sau khi giao diện render xong lần 1")
    // console.log("lần 2: sau khi mỗi lần component render lại")
    getApiProduct();
  }, []); //sử dụng tham số dependence là array rỗng thì chỉ chạy  1 lần sau render( tương tự didmount dùng để gọi api -api get all)

  const getApiProduct = () => {
    let promise = axios({
      url: "https://shop.cyberlearn.vn/api/Product",
      method: "GET",
    });

    promise.then((res) => {
      console.log(res.data.content);
      setArrProduct(res.data.content);
    });
  };
  return (
    <div className="container">
      <button className="" onClick={() => {}}>
        Get api
      </button>
      <h3>Product list</h3>
      <div className="row">
        {arrProduct.map((prod) => {
          return (
            <div className="col-md-3">
              <div className="card" key={prod.id}>
                <img src={prod.image} alt="..." />
                <div className="card-body">
                  <h3>{prod.name}</h3>
                  <p>{prod.price} $</p>
                  <button className="btn btn-outline-dark">
                    <i className="fa fa-cart-plus"></i>Add to cart
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UseEffect_DidMount;
