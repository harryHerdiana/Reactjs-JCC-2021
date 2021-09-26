import React, { useEffect, useContext, useState } from "react";
import { useHistory } from "react-router";
import { DataContext } from "../Context/DataContext";
import Button from "@mui/material/Button";
import { DataGrid } from "@mui/x-data-grid";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";


const GameList = () => {
  let history = useHistory();
  const {
    dataGames,
    setDataGames,
    inputGames,
    setInputGames,
    currentGamesId,
    setCurrentGamesId,
    gamesFetchStatus,
    setGamesFetchStatus,
    functions,
  } = useContext(DataContext);
  const {
    fetchGamesData,
    functionSubmitGames,
    functionUpdateGames,
    functionDeleteGames,
    functionEditGames,
    fetchGamesByID,
  } = functions;
  useEffect(() => {
    if (gamesFetchStatus === false) {
      fetchGamesData();
      setGamesFetchStatus(true);
    }
  }, [fetchGamesData, gamesFetchStatus, setGamesFetchStatus]);

  const handleDelete = (event) => {
    let idGames = parseInt(event.currentTarget.value);
    setGamesFetchStatus(false)
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
      release: 0,
    });
  };

  // const cancelSearch = () => {
  //   setSearched("");
  //   requestSearch(searched);
  // };
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
      field: "multiPlayer",
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

  const [sortModel, setSortModel] = useState([
    {
      field: "name",
      sort: "asc",
    },
  ]);
  const [rows, setRows] = useState(dataGames);
  const handleChange = function (event) {
    let typeOfValue = event.target.value;
    const filteredRows = dataGames.filter((row) => {
      return row.name.toLowerCase().includes(typeOfValue.toLowerCase());
    });
    setRows(filteredRows);
  };
  return (
    <div className="login-shifted">
      <Stack spacing={2} sx={{marginLeft:"7.5rem"}}>
        <h1>Setting Games</h1>
        <Button
          sx={{ width: "max-content" }}
          variant="contained"
          onClick={handleCreate}
          s
        >
          Create New Data
        </Button>

        <TextField sx={{ width: "10rem" }} onChange={handleChange} />
      </Stack>
      <div style={{ position: "absolute", top: "20rem", left: "20rem" }}>
        <DataGrid
          style={{ height: "20rem", width: "90rem" }}
          sortModel={sortModel}
          rows={rows}
          columns={columns}
          onSortModelChange={(model) => setSortModel(model)}
        />
      </div>
    </div>
  );
};
export default GameList;
