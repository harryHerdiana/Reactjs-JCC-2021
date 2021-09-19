import axios from "axios";
import React, { createContext, useState } from "react";
import { useHistory } from "react-router";
import { message } from "antd";

export const DataContext = createContext();

export const DataProvider = (props) => {
  const successSubmit = () => {
    message.success("Data Successfully Added!");
  };
  const successDelete = () => {
    message.success("Data Successfully Deleted");
  };
  const successEdit = () => {
    message.success("Data Successfully Edited");
  };
  let history = useHistory();
  const [dataApps, setDataApps] = useState([]);
  const [input, setInput] = useState({
    name: "",
    description: "",
    category: "",
    price: 0,
    size: 0,
    rating: 0,
    image_url: "",
    release_year: 0,
    is_android_app: false,
    is_ios_app: false,
    created_at: "",
    updated_at: "",
  });
  const [currentId, setCurrentId] = useState(-1);
  const [fetchStatus, setFetchStatus] = useState(false);

  const fetchData = async function () {
    let result = await axios.get(
      "http://backendexample.sanbercloud.com/api/mobile-apps"
    );
    let data = result.data;
    setDataApps(
      data.map((e, index) => {
        return {
          id: e.id,
          created_at: e.created_at,
          updated_at: e.updated_at,
          name: e.name,
          description: e.description,
          category: e.category,
          size: getSize(e.size),
          price: getPrice(e.price),
          rating: e.rating,
          image_url: e.image_url,
          release_year: e.release_year,
          is_android_app: e.is_android_app,
          is_ios_app: e.is_ios_app,
        };
      })
    );
  };
  const fetchByID = async (idApps) => {
    let res = await axios.get(
      `http://backendexample.sanbercloud.com/api/mobile-apps/${idApps}`
    );
    let data = res.data;
    setInput({
      id: data.id,
      created_at: data.created_at,
      updated_at: data.updated_at,
      name: data.name,
      description: data.description,
      category: data.category,
      size: data.size,
      price: data.price,
      rating: data.rating,
      image_url: data.image_url,
      release_year: data.release_year,
      is_android_app: data.is_android_app,
      is_ios_app: data.is_ios_app,
    });
    setCurrentId(data.id);
  };

  const getPrice = function (price) {
     if(price > 0) {
      return `Rp.${price}`;
    } else{
        return "Free"
    }
  };
  const getSize = function (size) {
    if (size > 1000) {
      return `${size / 1000} GB`;
    } else {
      return `${size}`;
    }
  };
  const functionSubmit = () => {
    axios
      .post("http://backendexample.sanbercloud.com/api/mobile-apps", {
        created_at: input.created_at,
        updated_at: input.updated_at,
        name: input.name,
        description: input.description,
        category: input.category,
        size: input.size,
        price: input.price,
        rating: input.rating,
        image_url: input.image_url,
        release_year: input.release_year,
        is_android_app: input.is_android_app,
        is_ios_app: input.is_ios_app,
      })
      .then((res) => {
        let data = res.data;
        setDataApps([
          ...dataApps,
          {
            id: data.id,
            created_at: data.created_at,
            updated_at: data.updated_at,
            name: data.name,
            description: data.description,
            category: data.category,
            size: data.size,
            price: data.price,
            rating: data.rating,
            image_url: data.image_url,
            release_year: data.release_year,
            is_android_app: data.is_android_app,
            is_ios_app: data.is_ios_app,
          },
        ]);
      });
    history.push("/");
    successSubmit();
  };
  const functionUpdate = (currentId) => {
    axios
      .put(
        `http://backendexample.sanbercloud.com/api/mobile-apps/${currentId}`,
        {
          created_at: input.created_at,
          updated_at: input.updated_at,
          name: input.name,
          description: input.description,
          category: input.category,
          size: input.size,
          price: input.price,
          rating: input.rating,
          image_url: input.image_url,
          release_year: input.release_year,
          is_android_app: input.is_android_app,
          is_ios_app: input.is_ios_app,
        }
      )
      .then((res) => {
        let newDataApps = dataApps.find((e) => e.id === setCurrentId);
        newDataApps.created_at = input.created_at;
        newDataApps.updated_at = input.updated_at;
        newDataApps.name = input.name;
        newDataApps.description = input.description;
        newDataApps.category = input.category;
        newDataApps.size = input.size;
        newDataApps.price = input.price;
        newDataApps.rating = input.rating;
        newDataApps.image_url = input.image_url;
        newDataApps.release_year = input.release_year;
        newDataApps.is_android_app = input.is_android_app;
        newDataApps.is_ios_app = input.is_ios_app;
        setDataApps([...dataApps]);
        history.push("/");
      });
    successEdit();
  };
  const functionDelete = (idApps) => {
    axios
      .delete(`http://backendexample.sanbercloud.com/api/mobile-apps/${idApps}`)
      .then(() => {
        let newDataApps = dataApps.filter((res) => {
          return res.id !== idApps;
        });
        setDataApps(newDataApps);
      });
    successDelete();
  };
  const functionEdit = (idApps) => {
    axios
      .get(`http://backendexample.sanbercloud.com/api/mobile-apps/${idApps}`)
      .then((res) => {
        let data = res.data;
        setInput({
          id: data.id,
          created_at: data.created_at,
          updated_at: data.updated_at,
          name: data.name,
          description: data.description,
          category: data.category,
          size: data.size,
          price: data.price,
          rating: data.rating,
          image_url: data.image_url,
          release_year: data.release_year,
          is_android_app: data.is_android_app,
          is_ios_app: data.is_ios_app,
        });
      });
  };
  const getPlatform = (android,ios) =>{
      if(android===true && ios===true){
          return "Android & iOS"
      } else if(android===true && ios===false){
          return "Android"
      } else{
          return "iOS"
      }

  }
  const getBoolean = (bool) =>{
      if(bool === 1){
          return "True"
      } else {
          return "False"
      }
  }
  const functions = {
    fetchData,
    getPrice,
    getSize,
    functionSubmit,
    functionUpdate,
    functionDelete,
    fetchByID,
    functionEdit,
    getPlatform,
    getBoolean
  };
  return (
    <DataContext.Provider
      value={{
        dataApps,
        setDataApps,
        input,
        setInput,
        currentId,
        setCurrentId,
        functions,
        fetchStatus,
        setFetchStatus,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};
