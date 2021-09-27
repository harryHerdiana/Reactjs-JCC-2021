import React, { useContext, useEffect,  } from "react";
import { useParams } from "react-router";
import { DataContext } from "../Context/DataContext";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";

const MovieForm = function () {
  let { Value } = useParams();
  const {
    inputMovie,
    setInputMovie,
    currentMovieId,
    setCurrentMovieId,
    functions,
  } = useContext(DataContext);
  const {
    functionSubmitMovie,
    functionUpdateMovie,
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
    setInputMovie({ ...inputMovie, [name]: typeOfValue });
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
  return (
    <div className="form-page">
      <div className="form-page-detail">
        <form method="post" onSubmit={handleSubmit}>
          <Stack spacing={2}>
            <Stack>
              <Typography variant="h5">Title</Typography>
              <input
                onChange={handleChange}
                value={inputMovie.title}
                name="title"
                type="text"
                style={{ fontSize: "1rem" }}
              />
            </Stack>
            <Stack>
              <Typography variant="h5">Genre</Typography>
              <input
                onChange={handleChange}
                value={inputMovie.genre}
                name="genre"
                type="text"
                style={{ fontSize: "1rem" }}
              />
            </Stack>
            <Stack>
              <Typography variant="h5">Duration (min)</Typography>
              <input
                onChange={handleChange}
                value={inputMovie.duration}
                name="duration"
                type="number"
                defaultValue={100}
                style={{ fontSize: "1rem" }}
              />
            </Stack>
            <Stack>
              <Typography variant="h5">Image URL</Typography>
              <input
                onChange={handleChange}
                value={inputMovie.image_url}
                name="image_url"
                type="url"
                style={{ fontSize: "1rem" }}
              />
            </Stack>
            <Stack>
              <Typography variant="h5">Rating</Typography>
              <input
                variant="outlined"
                label="Rating"
                onChange={handleChange}
                value={inputMovie.rating}
                name="rating"
                type="number"
                min={0}
                max={10}
                style={{ fontSize: "1rem" }}
              />
            </Stack>
            <Stack>
              <Typography variant="h5">Premiere Year</Typography>
              <input
                onChange={handleChange}
                value={inputMovie.year}
                name="year"
                type="number"
                defaultValue={2000}
                min={1980}
                max={2021}
                style={{ fontSize: "1rem" }}
              />
            </Stack>
            <Stack>
              <Typography variant="h5">Description</Typography>
              <TextField
                id="outlined-basic"
                variant="outlined"
                multiline
                onChange={handleChange}
                value={inputMovie.description}
                name="description"
                type="text"
                maxRows={4}
              />
            </Stack>
            <Stack>
              <Typography variant="h5">Review</Typography>
              <TextField
                id="outlined-basic"
                variant="outlined"
                multiline
                onChange={handleChange}
                value={inputMovie.review}
                name="review"
                type="text"
                maxRows={4}
              />
            </Stack>
            {/* <TextField
              id="outlined-basic"
              variant="outlined"
              label="Title"
              onChange={handleChange}
              value={inputMovie.title}
              name="title"
              type="text"
            />
            <TextField
              id="outlined-basic"
              variant="outlined"
              label="Genre"
              onChange={handleChange}
              value={inputMovie.genre}
              name="genre"
              type="text"
            />
            <TextField
              id="outlined-basic"
              variant="outlined"
              label="Duration"
              onChange={handleChange}
              value={inputMovie.duration}
              name="duration"
              type="number"
              max={200}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">min</InputAdornment>
                ),
              }}
            />
            <TextField
              id="outlined-basic"
              variant="outlined"
              label="Image URL"
              onChange={handleChange}
              value={inputMovie.image_url}
              name="image_url"
              type="url"
            />
            
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
              id="outlined-basic"
              variant="outlined"
              label="Premiere Year"
              onChange={handleChange}
              value={inputMovie.year}
              name="year"
              type="number"
              defaultValue={2000}
              min={1980}
            />
            <TextField
              id="outlined-basic"
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
              id="outlined-basic"
              variant="outlined"
              multiline
              label="Review"
              onChange={handleChange}
              value={inputMovie.review}
              name="review"
              type="text"
              maxRows={4}
            /> */}
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
