import React, { useContext, useEffect } from "react";
import { useParams } from "react-router";
import { DataContext } from "../Context/DataContext";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import MenuItem from "@mui/material/MenuItem";

const GameForm = function () {
  
  let { Value } = useParams();
  const {
    inputGames,
    setInputGames,
    currentGamesId,
    setCurrentGamesId,
    functions,
  } = useContext(DataContext);
  const {

    functionSubmitGames,
    functionUpdateGames,

    fetchGamesByID,
  } = functions;

  useEffect(() => {
    if (Value !== undefined) {
      fetchGamesByID(Value);
    }
  }, []);
  const handleChange = function (event) {
    let typeOfValue = event.target.value;
    let name = event.target.name;
    setInputGames({ ...inputGames, [name]: typeOfValue });
  };
  const handleSubmit = function (event) {
    event.preventDefault();
    if (currentGamesId === -1) {
      functionSubmitGames();
    } else {
      functionUpdateGames(currentGamesId);
    }
    setInputGames({
      genre: "",
      image_url: "",
      singlePlayer: true,
      multiplayer: false,
      name: "",
      platform: "",
      release: 0,
    });
    setCurrentGamesId(-1);
  };
  return (
    <div className="form-page">
      <div className="form-page-detail">
        <form method="post" onSubmit={handleSubmit}>
          <Stack spacing={2}>
            <TextField
            variant="outlined"
              label="Name"
              onChange={handleChange}
              value={inputGames.name}
              name="name"
              type="text"
            />
            <TextField
            variant="outlined"
              label="Platform"
              onChange={handleChange}
              value={inputGames.platform}
              name="platform"
              type="text"
            />{" "}
            <TextField
            variant="outlined"
              label="Genre"
              onChange={handleChange}
              value={inputGames.genre}
              name="genre"
              type="text"
            />
            <TextField
            variant="outlined"
              label="Image URL"
              onChange={handleChange}
              value={inputGames.image_url}
              name="image_url"
              type="url"
            />
            <TextField
            
              select
              label="Multi Player"
              onChange={handleChange}
              value={inputGames.multiplayer}
              name="multiplayer"
            >
              <MenuItem key="1" value={1}>
                Yes
              </MenuItem>
              <MenuItem key="0" value={0}>
                No
              </MenuItem>
            </TextField>
            <TextField
              select
              label="Single Player"
              onChange={handleChange}
              value={inputGames.singlePlayer}
              name="singlePlayer"
            >
              <MenuItem key="1" value={1}>
                Yes
              </MenuItem>
              <MenuItem key="0" value={0}>
                No
              </MenuItem>
            </TextField>
            {/* <Stack>
              <Typography variant="h5">Release Year</Typography>
              <input
                onChange={handleChange}
                value={inputGames.release}
                name="release"
                type="number"
                min={1980}
                max={2021}
                style={{ fontSize: "1rem" }}
              />
            </Stack> */}
            <TextField
            variant="outlined"
              label="Release Year"
              onChange={handleChange}
              value={inputGames.release}
              name="release"
              type="number"
              min={1980}
              max={2021}
              defaultValue={2000}
            />
            <Button
              sx={{ width: "30%", position: "relative", left: "24vw" }}
              variant="contained"
              type="submit"
            >
              Submit
            </Button>
          </Stack>
        </form>
      </div>
    </div>
  );
};
export default GameForm;
