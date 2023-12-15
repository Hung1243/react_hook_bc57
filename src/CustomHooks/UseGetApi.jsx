import axios from "axios";
import React, { useEffect, useState } from "react";

const UseGetApi = (url, method) => {
  const [data, setData] = useState({});
  const getApi = async () => {
    const res = await axios({
      url: url,
      method: "GET",
    });
    setData(res.data);
  };
  useEffect(() => {
    getApi();
  });
  return data;
};

export default UseGetApi;
