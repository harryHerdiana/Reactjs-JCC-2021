import React, { useContext, useEffect } from "react";
import { useParams } from "react-router";
import { DataContext } from "../Context/DataContext";

import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";

import faker from "faker";

const DetailedMovie = function () {
  let { Value } = useParams();
  const {
    inputMovie,

    functions,
  } = useContext(DataContext);
  const { fetchMovieByID } = functions;

  useEffect(() => {
    if (Value !== undefined) {
      fetchMovieByID(Value);
    }
  }, []);
  const firstNameGen = faker.name.firstName();
  const lastNameGen = faker.name.lastName();

  return (
    <div className="detail-page">
      <div className="detail-left">
        <img alt="movie detail" className="detail-image" src={inputMovie.image_url} />
      </div>
      <div className="detail-right">
        <br />
        <Typography variant="h4">
          {inputMovie.title !== null
            ? inputMovie.title.toUpperCase()
            : inputMovie.title}
        </Typography>
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
          style={{ marginBottom: "20px" }}
          className="avatar"
          alt=""
          src={`https://eu.ui-avatars.com/api/?name=${firstNameGen}+${lastNameGen}`}
        />
        <Typography variant="subtitle1">
          "{firstNameGen} {lastNameGen}"
        </Typography>
      </div>
    </div>
  );
};
export default DetailedMovie;
