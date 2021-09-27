import React, { useEffect, useContext, useState } from "react";
import { useHistory } from "react-router";
import { DataContext } from "../Context/DataContext";
import Button from "@mui/material/Button";
import { DataGrid } from "@mui/x-data-grid";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";

const GameList = () => {
  let history = useHistory();
  const {
    dataGames,
    setInputGames,
    gamesFetchStatus,
    setGamesFetchStatus,
    functions,
  } = useContext(DataContext);
  const { fetchGamesData, functionDeleteGames, functionEditGames } = functions;
  useEffect(() => {
    if (gamesFetchStatus === false) {
      fetchGamesData();
      setGamesFetchStatus(true);
    }
  }, [gamesFetchStatus, setGamesFetchStatus]);

  const handleDelete = (event) => {
    let idGames = parseInt(event.currentTarget.value);
    functionDeleteGames(idGames);
  };

  const handleEdit = (event) => {
    let idGames = parseInt(event.currentTarget.value);
    history.push(`/setting_game/edit/${idGames}`);
    functionEditGames(idGames);
  };

  const handleCreate = () => {
    history.push("/setting_game/create");
    setInputGames({
      genre: "",
      image_url: "",
      singlePlayer: true,
      multiPlayer: true,
      name: "",
      platform: "",
      release: 1980,
    });
  };

  const columns = [
    {
      field: "name",
      headerName: "Name",
      width: 250,
    },
    {
      field: "genre",
      headerName: "Genre",
      width: 150,
    },
    {
      field: "image_url",
      headerName: "Image URL",
      width: 300,
    },
    {
      field: "singlePlayer",
      type: "boolean",
      headerName: " Single Player?",
    },
    {
      field: "multiplayer",
      type: "boolean",
      headerName: "Multi Player?",
    },
    {
      field: "platform",
      headerName: "Platform",
      width: 200,
    },
    {
      field: "release",
      type: "date",
      headerName: "Release Date",
    },
    {
      field: "action",
      headerName: "Action",
      width: 170,
      renderCell: (params) => (
        <div>
          <Button
            sx={{ margin: "5px" }}
            size="small"
            variant="contained"
            color="warning"
            onClick={handleDelete}
            value={params.id}
          >
            <DeleteForeverIcon />
          </Button>
          <Button
            sx={{ margin: "5px" }}
            size="small"
            variant="contained"
            color="info"
            onClick={handleEdit}
            value={params.id}
          >
            <EditIcon />
          </Button>
        </div>
      ),
    },
  ];

  let dataTable = dataGames;
  const [rows, setRows] = useState(dataTable);
  
  const handleChangeRelease = function (event) {
    let typeOfValue = event.target.value;
    const filteredRows = dataGames.filter((row) => {
      return row.release.toLowerCase().includes(typeOfValue.toLowerCase());
    });
    setTimeout(setRows(filteredRows), 2000);
  };
  const handleChangeGenre = function (event) {
    let typeOfValue = event.target.value;
    const filteredRows = dataGames.filter((row) => {
      return row.genre.toLowerCase().includes(typeOfValue.toLowerCase());
    });
    setTimeout(setRows(filteredRows), 2000);
  };
  const handleChangePlatform = function (event) {
    let typeOfValue = event.target.value;
    const filteredRows = dataGames.filter((row) => {
      return row.platform.toLowerCase().includes(typeOfValue.toLowerCase());
    });
    setTimeout(setRows(filteredRows), 2000);
  };
  return (
    <div className="login-shifted">
      <Stack spacing={2} sx={{ marginLeft: "7.5rem" }}>
        <h1>Setting Games</h1>
        <Button
          sx={{ width: "max-content" }}
          variant="contained"
          onClick={handleCreate}
          s
        >
          Create New Data
        </Button>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <Stack>
              <Typography variant="body1">Sort By Release</Typography>
              <TextField
                sx={{ width: "10rem" }}
                onChange={handleChangeRelease}
              />
            </Stack>
          </Grid>
          <Grid item xs={2}>
            <Stack>
              <Typography variant="body1">Sort By Genre</Typography>
              <TextField sx={{ width: "10rem" }} onChange={handleChangeGenre} />
            </Stack>
          </Grid>
          <Grid item xs={2}>
            <Stack>
              <Typography variant="body1">Sort By Platform</Typography>
              <TextField
                sx={{ width: "10rem" }}
                onChange={handleChangePlatform}
              />
            </Stack>
          </Grid>
          <Grid xs={6}></Grid>
        </Grid>
      </Stack>
      <div style={{ position: "absolute", top: "25rem", left: "20rem" }}>
        <DataGrid
          style={{ height: "20rem", width: "90rem" }}
          rows={rows}
          columns={columns}
        />
      </div>
    </div>
  );
};
export default GameList;
