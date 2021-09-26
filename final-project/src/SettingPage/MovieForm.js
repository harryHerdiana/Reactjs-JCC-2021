import React, { useContext, useEffect,useState } from "react";
import { useParams, useHistory } from "react-router";
import { DataContext } from "../Context/DataContext";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import InputAdornment from '@mui/material/InputAdornment';

const MovieForm = function () {
  let history = useHistory();
  let { Value } = useParams();
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
    if (Value !== undefined) {
      fetchMovieByID(Value);
    }
  }, []);
  const handleChange = function (event) {
    let typeOfValue = event.target.value;
    let name = event.target.name;
    setInputMovie({ ...setInputMovie, [name]: typeOfValue });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (currentMovieId === -1) {
      functionSubmitMovie();
    } else {
      functionUpdateMovie(currentMovieId);
    }
    setInputMovie({
      description: "",
      duration: 0,
      genre: "",
      image_url: "",
      rating: 0,
      review: "",
      title: "",
      year: 0,
    });
    setCurrentMovieId(-1);
  };
  const [value, setValue] = useState(inputMovie.rating);
  return (
    <div className="form-page">
      <div className="form-page-detail">
        <form method="post" onSubmit={handleSubmit}>
          <Stack spacing={2}>
            <TextField
            variant="outlined"
              label="Title"
              onChange={handleChange}
              value={inputMovie.title}
              name="title"
              type="text"
            />
            <TextField
            variant="outlined"
              label="Genre"
              onChange={handleChange}
              value={inputMovie.genre}
              name="genre"
              type="text"
            />
            <TextField
            variant="outlined"
              label="Duration"
              onChange={handleChange}
              value={inputMovie.duration}
              name="duration"
              type="number"
              max={200}
              InputProps={{
                endAdornment: <InputAdornment position="end">min</InputAdornment>,
              }}
            />
            <TextField
            variant="outlined"
              label="Image URL"
              onChange={handleChange}
              value={inputMovie.image_url}
              name="image_url"
              type="url"
            />
            {/* <div>
              <Typography component="legend">Movie Rating</Typography>
              <Rating
                min={0}
                max={10}
                name="customized-10"
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
            </div> */}
            <TextField
            variant="outlined"
              label="Rating"
              onChange={handleChange}
              value={inputMovie.rating}
              name="rating"
              type="number"
              min={0}
              max={10}
            />
            <TextField
            variant="outlined"
              label="Premiere Year"
              onChange={handleChange}
              value={inputMovie.year}
              name="year"
              type="number"
              min={1980}
            />
            <TextField
            variant="outlined"
            multiline
              label="Description"
              onChange={handleChange}
              value={inputMovie.description}
              name="description"
              type="text"
              maxRows={4}
            />
            <TextField
            variant="outlined"
            multiline
              label="Review"
              onChange={handleChange}
              value={inputMovie.review}
              name="review"
              type="text"
              maxRows={4}
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

export default MovieForm;
