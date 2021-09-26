import React, { useEffect, useContext, useState } from "react";
import { useHistory } from "react-router";
import { DataContext } from "../Context/DataContext";
import Button from "@mui/material/Button";
import { DataGrid } from "@mui/x-data-grid";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";


const MovieList = () => {
  let history = useHistory();
  const {
    dataMovie,
    setDataMovie,
    inputMovie,
    setInputMovie,
    currentMovieId,
    setCurrentMovieId,
    movieFetchStatus,
    setMovieFetchStatus,
    functions,
  } = useContext(DataContext);
  const {
    fetchMovieData,
    functionSubmitMovie,
    functionUpdateMovie,
    functionDeleteMovie,
    functionEditMovie,
    fetchMovieByID,
  } = functions;
  useEffect(() => {
    if (movieFetchStatus === false) {
      fetchMovieData();
      setMovieFetchStatus(true);
    }
  }, [fetchMovieData, movieFetchStatus, setMovieFetchStatus]);

  const handleDelete = (event) => {
    let idMovie = parseInt(event.currentTarget.value);
    functionDeleteMovie(idMovie);
  };

  const handleEdit = (event) => {
    let idMovie = parseInt(event.currentTarget.value);
    history.push(`/setting_movie/edit/${idMovie}`);
    functionEditMovie(idMovie);
  };

  const handleCreate = function(){
    history.push("/setting_movie/create")
    setInputMovie({
      description: "",
      duration: 0,
      genre: "",
      image_url: "",
      rating: 0,
      review: "",
      title: "",
      year: 0,
    })
  }

  const columns = [
    {
      field:"title",
      headerName:"Title",
      width:250
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
      type:"date"
    },
    {
      field: "description",
      headerName: "Description",
      width:300,
    },
    {
      field: "review",
      headerName: "Review",
      width:300,
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
      field: "title",
      sort: "asc",
    },
  ]);
  const [rows, setRows] = useState(dataMovie);
  const handleChange = function (event) {
    let typeOfValue = event.target.value;
    const filteredRows = dataMovie.filter((row) => {
      return row.title.toLowerCase().includes(typeOfValue.toLowerCase());
    });
    setRows(filteredRows);
  };
  return (
    <div className="login-shifted">
      <Stack spacing={2} sx={{marginLeft:"7.5rem"}}>
        <h1>Setting Movie</h1>
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
export default MovieList;