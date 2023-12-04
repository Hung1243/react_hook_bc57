import React, { useState } from "react";

const ChangeProfile = () => {
  const [num, setNum] = useState(0);

  return (
    <div className="conrainer">
      <div className="card w-25">
        <img src={`https://i.pravatar.cc?u=${num}`} alt="..." />
        <div className="card-body">
          <div
            className="btn btn-danger"
            onClick={() => {
              setNum(num - 1);
            }}
          >
            Prev
          </div>
          <div
            className="btn btn-success mx-2"
            onClick={() => {
              setNum(num + 1);
            }}
          >
            Next
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangeProfile;
