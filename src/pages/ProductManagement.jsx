import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {
  getAllProductApiAction,
  getAllProductThunkAction,
  setArrayProductAction,
} from "../redux/Reducer/ProductReducer";

const ProductManagement = () => {
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});
  const dispatch = useDispatch();

  //lấy dữ liệu từ redux về
  const { arrProduct } = useSelector((state) => state.productReducer);

  //call api
  const getAllProduct = async () => {
    // const res = await axios({
    //   url: "https://shop.cyberlearn.vn/api/Product",
    //   method: "GET",
    // });
    // const action = setArrayProductAction(res.data.content);
    // dispatch(action);
    /*
      action-thường: {type:'',payload: ...}
      action-thunk: (dispatch) => {
        //xử lý abc để có dữ liệu và dùng dispatch đưa lên redux
      }
    */

    //cách 1: create action thunk (tự code)
    // dispatch(getAllProductApiAction);
    const action = getAllProductApiAction ();
    dispatch (action)
    //cách 2: create asyncaction (thư viện)
//     const action = getAllProductThunkAction();
//     dispatch(action);
//   };
  useEffect(() => {
    getAllProduct();
  }, []);
  const handleChange = (pagination, filters, sorter) => {
    console.log("Various parameters", pagination, filters, sorter);
    setFilteredInfo(filters);
    setSortedInfo(sorter);
  };

  const columns = [
    {
      title: "ID", //tiêu đề của từng column
      dataIndex: "id",
      key: "id",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.id - b.id,
    },
    {
      title: "Name", //tiêu đề của từng column
      dataIndex: "name",
      key: "name",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.name.length - b.name.length,
      onFilter: (value, record) => record.name.includes(value),
    },
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: function (text, record, index) {
        // console.log("text", text);
        // console.log("record", record);
        // console.log("index", index);
        return (
          <div>
            <img src={text} alt="..." width={100} height={100} />
          </div>
        );
      },
    },
    {
      title: "Size",
      dataIndex: "size",
      key: "size",
      render: function (text, record, index) {
        const sizes = JSON.parse(text);
        return (
          <div>
            {sizes?.map((number) => {
              return <span className="mx-2">{number}</span>;
            })}
          </div>
        );
      },
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (text, record, index) => {
        return (
          <div>
            <NavLink to={`/detail/${record.id}`}>View Detail</NavLink>
          </div>
        );
      },
    },
  ];
  return (
    <div className="container">
      <h3>Product management</h3>
      <Table
        columns={columns}
        dataSource={arrProduct}
        onChange={handleChange}
      />
    </div>
  );
};

export default ProductManagement;
