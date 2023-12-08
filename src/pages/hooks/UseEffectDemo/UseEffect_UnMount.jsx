import React, { useEffect } from "react";

const UseEffect_UnMount = () => {
  useEffect(() => {
    const timeout = setInterval(() => {
      console.log("call api");
    }, 1000);

    return () => {
      //Return trong bất kì useEffect nào cũng sẽ kích hoạt khi component đó mất khỏi giao diện
      clearInterval(timeout);
    };
  });

  return <div>UseEffect_UnMount</div>;
};

export default UseEffect_UnMount;
