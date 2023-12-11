import React, { useRef, useState } from "react";
import ChildComponent from "./ChildComponent";

//useRef: thường được sử dụng để lưu lại các giá trị sau mỗi lần render(setstate, dispatch redux)
//ngoài ra useRef còn được dùng để tham chiếu (dom đến )1 thẻ html hoặc thẻ component, khi dom đến thẻ component thì
// ta có thể truy xuất được tất cả thuộc tính và phương thức của component đó
const ExHookUseRef = () => {
  const refLogin = useRef({
    username: "",
    password: "",
  });
  const refDom = useRef();
  const refDomChildComponent = useRef();
  //   const [userLogin, setUserLogin] = useState({
  //     username: "",
  //     password: "",
  //   });

  //   let userLogin = {
  //     username: "",
  //     password: "",
  //   };
  //   console.log(userLogin);
  const handeleChangeInput = (e) => {
    const { id, value } = e.target;

    refLogin.current[id] = value;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(refLogin.current);
    //ngoài ra ref cũng dùng để dom đến các thẻ tuy nhiên ta có thể quản lý được dễ dàng thông qua biến ref trên commponent đó
    refDom.current.className = "btn btn-dark";
  };
  return (
    <form className="container" onSubmit={handleSubmit}>
      <h3>Login</h3>
      <div className="form-group">
        <p>User Name</p>
        <input
          className="form-control"
          id="username"
          name="username"
          onInput={handeleChangeInput}
        />
      </div>
      <div className="form-group">
        <p>Password</p>
        <input
          className="form-control"
          id="password"
          name="password"
          type="password"
          onInput={handeleChangeInput}
        />
      </div>
      <div className="form-group mt-2">
        <button className="btn btn-success" ref={refDom}>
          login
        </button>
      </div>

      <ChildComponent ref={refDomChildComponent} />
      <button
        onClick={() => {
          let state = refDomChildComponent.current.state;
          console.log(
            refDomChildComponent.current.setState({
              number: state.number + 1,
            })
          );
        }}
      >
        Get element component
      </button>
    </form>
  );
};

export default ExHookUseRef;
