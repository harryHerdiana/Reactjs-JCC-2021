import React, { useContext, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Cookies from "js-cookie";


const ChangePassword = () => {
  let history = useHistory();
  const [input, setInput] = useState({ current_password: "", new_password: "", new_confirm_password: "" });

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("https://backendexample.sanbersy.com/api/change-password", {
        current_password: input.current_password,
        new_password: input.new_password,
        new_confirm_password: input.new_confirm_password,
      },{headers:{"Authorization":`Bearer${Cookies.get("token")}`}})
      .then(() => {
        history.push("/");
      })
      .catch((err) => {
        alert(err);
      });
      console.log(Cookies.get("user"));
  };

  const handleChange = (event) => {
    let value = event.target.value;
    let name = event.target.name;
    console.log(value);
    setInput({ ...input, [name]: value });
  };

  return (
    <div className="form-container register">
        <img className="form-image" src="https://image.freepik.com/free-vector/secure-login-concept-illustration_114360-4685.jpg"/>
      <form className="form " onSubmit={handleSubmit}>
          <Typography variant="h5">Register Now!</Typography>
          <Typography variant="body1">Open your account. It's free and only takes a minute.</Typography>
        <br/>
        <label>Current Password : </label>
        <br />
        <input
          className="input"
          type="password"
          name="current_password"
          value={input.current_password}
          onChange={handleChange}
        />
        <br />
        <label>New Password : </label>
        <br />
        <input
          className="input"
          type="password"
          name="new_password"
          value={input.new_password}
          onChange={handleChange}
        />
        <br />
        <label>Confirm New Password : </label>
        <br />
        <input
          className="input"
          type="password"
          name="new_confirm_password"
          value={input.new_confirm_password}
          onChange={handleChange}
        />
        <br />
        <br />
        <Button type="submit" variant="contained">
          Submit
        </Button>
      </form>
      
    </div>
  );
};

export default ChangePassword;
