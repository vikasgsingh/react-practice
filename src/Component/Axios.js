import React, { useState, useEffect } from "react";
import axios from "axios";
const Axios = () => {
  let [data, Setdata] = useState([]);
  useEffect(() => {
    let res = axios("https://api.github.com/users");

    res.then((result) => {
      Setdata(result.data);
    });
  });
  return (
    <>
      <h1>api call</h1>
      {data ? (
        <div>
          {data.map((item) => {
            return 
          })}
        </div>
      ) : (
        <div>no data</div>
      )}
    </>
  );
};

export default Axios;
