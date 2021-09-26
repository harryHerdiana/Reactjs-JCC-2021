import React, { useContext, useEffect } from "react";
import { useParams, useHistory } from "react-router";
import { DataContext } from "../Context/DataContext";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import axios from "axios";

const DetailedMovie = function () {
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
  return (
    <div className="detail-page">
      <div className="detail-left">
        <img className="detail-image" src={inputMovie.image_url} />
      </div>
      <div className="detail-right">
        <br />
        <Typography variant="h4">{inputMovie.title.toUpperCase()}</Typography>
        <div className="detail-right-sub">
          <h5>{inputMovie.year}</h5>
          <h5>{inputMovie.duration} min</h5>
          <h5>{inputMovie.genre}</h5>
        </div>
        <Typography variant="h5">Rating: {inputMovie.rating}/10</Typography>
        <br />
        <Typography variant="body1">{inputMovie.description}</Typography>
        <br />
        <br />
        <br />
        <br />
        <br />
        <Typography variant="body2">{inputMovie.review}</Typography>
        <Avatar
          className="avatar"
          alt=""
          src="https://ui-avatars.com/api/?background=0D8ABC&color=fff"
        />
      </div>
    </div>
  );
};
export default DetailedMovie;
