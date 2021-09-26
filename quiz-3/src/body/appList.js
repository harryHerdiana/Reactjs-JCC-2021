import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router";
import { DataContext } from "../context/DataContext";
import { Button, Typography, Table, } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

const AppList = () => {
  let history = useHistory();
  const { Title } = Typography;
  const { input,currentId, setInput, dataApps, functions, fetchStatus, setFetchStatus } =
    useContext(DataContext);
  const {
    fetchData,
    functionDelete,
    functionEdit,
  } = functions;
  useEffect(() => {
    if (fetchStatus === false) {
      fetchData();
      setFetchStatus(true);
    }
  }, [fetchData, fetchStatus, setFetchStatus]);

  const handleDelete = (event) => {
    let idApps = parseInt(event.currentTarget.value);
    console.log(event.currentTarget);
    functionDelete(idApps);
  };
  const handleEdit = (event) => {
      console.log(event.target);
    let idApps = parseInt(event.currentTarget.value);
    history.push(`/mobile/form/edit/${idApps}`);
    functionEdit(idApps);
  };
  const handleCreate = () => {
    history.push("/mobile-form");
    setInput({
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
  };
  const dataTable = dataApps;
  const collumns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "score",
    },
    {
      title: "Year",
      dataIndex: "release_year",
      key: "release_year",
    },
    {
      title: "Size",
      dataIndex: "size",
      key: "size",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Image_url",
      dataIndex: "image_url",
      key: "image_url",
    },
    {
      title: "is_android_app",
      dataIndex: `is_android_app`,
      key: "is_android_app",
      render: val => (val ? "True" : "False")
      
    },
    {
      title: "is_ios_app",
      dataIndex: "is_ios_app",
      key: "is_ios_app",
      render: val => (val ? "True" : "False")
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <div>
          <Button
            type="primary"
            onClick={handleEdit}
            value={text.id}
          >
            Edit
          </Button>
          <Button
            type="default"
            danger
            onClick={handleDelete}
            value={text.id}
          >
            Delete
          </Button>
        </div>
      ),
    },
  ];
  return (
    <div>
      <Title style={{ textAlign: "left", marginLeft: "2rem" }}>
        Mobile App List
      </Title>
      <Button
        type="primary"
        onClick={handleCreate}
        style={{ width: "15rem", marginLeft: "2rem" }}
      >
        Create new App Data
      </Button>
      <Table  style={{textAlign:"center"}} dataSource={dataTable} columns={collumns}/>
    <br></br>
    </div>
  );
};
export default AppList;