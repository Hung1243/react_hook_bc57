import React, { useEffect, useState } from "react";
import { Button, Space, Table } from "antd";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
// import { getAllProductApiAction } from "../redux/Reducers/ProductReducer";
import { getAllProductApiAction } from "../redux/Reducer/ProductReducer";

//Dữ liệu bên ngoài component

const ProductManagement = () => {
  //Nội dung trong component
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});
  //Lấy dữ liệu từ redux về
  const { arrProduct } = useSelector((state) => state.productReducer);
  const dispatch = useDispatch();
  const getAllProduct = async () => {
    //Sau khi có giá trị từ api thì dispatch giá trị lên reducer
    // const res = await axios({
    //   url:'https://shop.cyberlearn.vn/api/Product',
    //   method:'GET'
    // });
    // const action = setArrayProductAction(res.data.content);
    /*
      action-thường: {type:'',payload: ...}
      action-thunk: (dispatch) => {
        //xử lý abc để có dữ liệu và dùng dispatch đưa lên redux
      }
    */
    //Cách 1: create action thunk (tự code)
    const action = getAllProductApiAction();
    dispatch(action);
    //Cách 2: create asynction (thư viện)
    // const action = getAllProductAsyncThunkAction();
    // dispatch(action);
  };

  useEffect(() => {
    //Gọi api
    getAllProduct();
  }, []);

  const handleChange = (pagination, filters, sorter) => {
    console.log("Various parameters", pagination, filters, sorter);
    setFilteredInfo(filters);
    setSortedInfo(sorter);
  };

  const columns = [
    {
      title: "id", //Tiêu đề của từng column
      dataIndex: "id",
      name: "id",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.id - b.id,
    },
    {
      title: "name", //Tiêu đề của từng column
      dataIndex: "name",
      name: "name",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.name.length - b.name.length,
      filters: [
        {
          text: "Joe",
          value: "Joe",
        },
        {
          text: "Category 1",
          value: "Category 1",
        },
        {
          text: "Category 2",
          value: "Category 2",
        },
      ],
      filterMode: "tree",
      filterSearch: true,
      onFilter: (value, record) => record.name.startsWith(value),
    },
    {
      title: "image", //Tiêu đề của từng column
      dataIndex: "image",
      name: "image",
      render: function (text, record, index) {
        // console.log('text',text);
        // console.log('record',record);
        // console.log('index',index);
        return (
          <div>
            <img src={record.image} alt="..." width={50} height={50} />
          </div>
        );
      },
    },
    {
      title: "size", //Tiêu đề của từng column
      dataIndex: "size",
      name: "size",
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
      name: "action",
      render: (text, record, index) => {
        return (
          <div>
            <NavLink to={`/detail/${record.id}`}>View detail</NavLink>
          </div>
        );
      },
    },
  ];
  return (
    <div className="container">
      <h3>Product mangement </h3>
      <Table
        columns={columns}
        dataSource={arrProduct}
        onChange={handleChange}
      />
    </div>
  );
};

export default ProductManagement;
