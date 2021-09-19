import React, { useEffect, useContext } from "react";
import { Descriptions } from "antd";
import { DataContext } from "../context/DataContext";
import { useHistory } from "react-router";

import { Button, Typography, Table, Space } from "antd";
function Home() {
  const { Title } = Typography;
  let history = useHistory();
  const { input, setInput, dataApps, functions, fetchStatus, setFetchStatus } =
    useContext(DataContext);
  const {
    fetchData,
    getSize,
    getPrice,
    getPlatform,
    functionDelete,
    functionEdit,
  } = functions;
  useEffect(() => {
    if (fetchStatus === false) {
      fetchData();
      setFetchStatus(true);
    }
  }, [fetchData, fetchStatus, setFetchStatus]);

  const dataDesc = dataApps;
  return (
    <div>
      <Title style={{marginLeft:"1rem"}}>Popular Mobile Apps</Title>
      {dataDesc.map((val, _) => {
        return (
          <div class="card">
            <div>
              <h2>{val.name}</h2>
              <h5>Release Year : {val.release_year}</h5>
              <img
                className="img"
                style={{width:"50%",height:"300px",objectFit:"contain"}}
                src={val.image_url}
              />
              <br />
              <br />
              <div>
                <strong>Price: {val.price}</strong>
                <br />
                <strong>Rating: {val.rating}/5</strong>
                <br />
                <strong>Size: {getSize(val.size)}</strong>
                <br />
                <strong style={{marginRight:"10px"}}>
                  Platform : {getPlatform(val.is_android_app, val.is_ios_app)}
                </strong>
                <br />
              </div>
              <p>
                <strong style={{marginRight:"10px"}}>Description :</strong>
                {val.description}
              </p>

              <hr />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
