import React, { useContext, useEffect } from "react";
import { useParams, useHistory } from "react-router";
import { DataContext } from "../context/DataContext";
import { Button, Typography, Table, Space, Input, Checkbox } from "antd";

const AppForm = function () {
  const { TextArea } = Input;
  const { Title } = Typography;
  const { input, setInput, currentId, setCurrentId, functions } =
    useContext(DataContext);
  const {
    functionSubmit,
    functionUpdate,
    getSize,
    getPrice,
    getPlatform,
    getBoolean,
    fetchByID,
  } = functions;
  let { value } = useParams();
  useEffect(() => {
    if (value !== undefined) {
      fetchByID(value);
    }
  }, []);
  const handleChange = (event) => {
    let typeOfValue = event.target.value;
    let name = event.target.name;
    setInput({ ...input, [name]: typeOfValue });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (currentId === -1) {
      functionSubmit();
    } else {
      functionUpdate(currentId);
    }
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
    setCurrentId(-1);
  };
  const optionsCheckbox = [
    { label: "iOS", value: input.is_ios_app },
    { label: "Android", value: input.is_android_app },
  ];
  return (
    <div>
      <Title style={{ textAlign: "left", marginLeft: "2rem" }}>
        New App Data Form
      </Title>
      <form
        method="post"
        onSubmit={handleSubmit}
        style={{
          width: "50%",
          border: "1px solid #aaa",
          margin: "auto",
          padding: "50px",
          marginBottom: "20px",
        }}
      >
        <strong style={{ width: "300px", display: "inline-block" }}>
          Nama :{" "}
        </strong>
        <Input
          style={{ float: "right" }}
          onChange={handleChange}
          value={input.name}
          name="name"
          type="text"
          required
        />
        <br />
        <br />
        <strong style={{ width: "300px", display: "inline-block" }}>
          Category :{" "}
        </strong>
        <Input
          style={{ float: "right" }}
          onChange={handleChange}
          value={input.category}
          name="category"
          type="text"
          required
        />
        <br />
        <br />
        <strong style={{ width: "300px", display: "inline-block" }}>
          Description :{" "}
        </strong>
        <TextArea
          rows={4}
          style={{ float: "right" }}
          onChange={handleChange}
          value={input.description}
          name="description"
          type="text-field"
          required
        />
        <br />
        <br />
        <br />
        <br />
        <br />
        <strong style={{ width: "300px", display: "inline-block" }}>
          Year :{" "}
        </strong>
        <Input
          style={{ float: "right" }}
          onChange={handleChange}
          value={input.release_year}
          name="release_year"
          type="text"
          required
        />
        <br />
        <br />
        <strong style={{ width: "300px", display: "inline-block" }}>
          Size :{" "}
        </strong>
        <Input
          style={{ float: "right" }}
          onChange={handleChange}
          value={input.size}
          name="size"
          type="number"
          required
          min={0}
        />
        <br />
        <br />
        <strong style={{ width: "300px", display: "inline-block" }}>
          Price :{" "}
        </strong>
        <Input
          style={{ float: "right" }}
          onChange={handleChange}
          value={input.price}
          name="price"
          type="number"
          min={0}
          required
        />
        <br />
        <br />
        <strong style={{ width: "300px", display: "inline-block" }}>
          Rating :{" "}
        </strong>
        <Input
          style={{ float: "right" }}
          onChange={handleChange}
          value={input.rating}
          name="rating"
          type="number"
          min={0}
          max={5}
          required
        />
        <br />
        <br />
        <strong style={{ width: "300px", display: "inline-block" }}>
          Img Url :{" "}
        </strong>
        <Input
          style={{ float: "right" }}
          onChange={handleChange}
          value={input.image_url}
          name="image_url"
          type="text"
          required
        />
        <br />
        <br />
        <strong style={{ width: "300px", display: "inline-block" }}>
          Platform:
        </strong>
        <br/>
        <input type="checkbox" value={input.is_ios_app} name="iOS" />
        <label for="iOS">iOS</label>
        <br />
        <input type="checkbox" value={input.is_android_app} name="Android" />
        <label for="Android">Android</label>
        <br />
        <input style={{ float: "right" }} type="submit" />
      </form>
    </div>
  );
};
export default AppForm;
