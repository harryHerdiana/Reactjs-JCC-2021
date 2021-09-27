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


const MovieList = () => {
  let history = useHistory();
  const {
    dataMovie,
    setInputMovie,
    movieFetchStatus,
    setMovieFetchStatus,
    functions,
  } = useContext(DataContext);
  const {
    fetchMovieData,
    functionDeleteMovie,
    functionEditMovie,

  } = functions;
  useEffect(() => {
    if (movieFetchStatus === false) {
      fetchMovieData();
      setMovieFetchStatus(true);
    }
  }, [fetchMovieData,movieFetchStatus, setMovieFetchStatus]);

  const handleDelete = (event) => {
    let idMovie = parseInt(event.currentTarget.value);
    functionDeleteMovie(idMovie);
    
  };

  const handleEdit = (event) => {
    let idMovie = parseInt(event.currentTarget.value);
    history.push(`/setting_movie/edit/${idMovie}`);
    functionEditMovie(idMovie);
  };

  const handleCreate = function () {
    history.push("/setting_movie/create");
    setInputMovie({
      description: "",
      duration: 60,
      genre: "",
      image_url: "",
      rating: 0,
      review: "",
      title: "",
      year: 1980,
    });
  };

  const columns = [
    {
      field: "title",
      headerName: "Title",
      width: 250,
    },
    {
      field: "genre",
      headerName: "Genre",
      width: 150,
    },
    {
      field: "rating",
      type: "number",
      headerName: "Rating",
    },
    {
      field: "image_url",
      headerName: "Image URL",
      width: 300,
    },
    {
      field: "duration",
      type: "number",
      headerName: "Duration",
    },
    {
      field: "year",
      headerName: "Year",
      type: "date",
    },
    {
      field: "description",
      headerName: "Description",
      width: 300,
    },
    {
      field: "review",
      headerName: "Review",
      width: 300,
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
  let dataTable = dataMovie
  const [rows, setRows] = useState(dataTable);
  const handleChangeDuration = function (event) {
    let typeOfValue = event.target.value;
    const filteredRows = dataMovie.filter((row) => {
      return row.duration.toLowerCase().includes(typeOfValue.toLowerCase());
    });
    setTimeout(setRows(filteredRows), 2000);
  };
  const handleChangeGenre = function (event) {
    let typeOfValue = event.target.value;
    const filteredRows = dataMovie.filter((row) => {
      return row.genre.toLowerCase().includes(typeOfValue.toLowerCase());
    });
    setTimeout(setRows(filteredRows), 2000);
  };
  const handleChangeYear = function (event) {
    let typeOfValue = event.target.value;
    const filteredRows = dataMovie.filter((row) => {
      return row.year.toLowerCase().includes(typeOfValue.toLowerCase());
    });
    setTimeout(setRows(filteredRows), 2000);
  };
  return (
    <div className="login-shifted">
      <Stack spacing={2} sx={{ marginLeft: "7.5rem" }}>
        <h1>Setting Movie</h1>
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
              <Typography variant="body1">Sort By Duration</Typography>
              <TextField
                sx={{ width: "10rem" }}
                onChange={handleChangeDuration}
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
              <Typography variant="body1">Sort By Year</Typography>
              <TextField
                sx={{ width: "10rem" }}
                onChange={handleChangeYear}
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
export default MovieList;
