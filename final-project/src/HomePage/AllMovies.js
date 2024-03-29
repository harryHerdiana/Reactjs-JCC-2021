import React, { useEffect, useContext } from "react";
import { useHistory } from "react-router";
import { DataContext } from "../Context/DataContext";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Cookies from "js-cookie";
import Rating from "@mui/material/Rating";

function AllMovies() {
  let history = useHistory();
  const {
    dataMovie,
    movieFetchStatus,
    setMovieFetchStatus,
    functions,
  } = useContext(DataContext);
  const {
    fetchMovieData,
  } = functions;

  useEffect(() => {
    if (movieFetchStatus) {
      fetchMovieData();
      setMovieFetchStatus(false);
    }
  }, [fetchMovieData,movieFetchStatus, setMovieFetchStatus]);
  const handleClickMovie = (event) => {
    //   console.log("button clicked");
    let idItem = parseInt(event.currentTarget.value);
    console.log(idItem);
    history.push(`/detail_movie/${idItem}`);
  };

  return (
    <div
      class={Cookies.get("token") !== undefined ? "login-shifted" : "content"}
    >
      <Typography className="home-title" variant="h3">
        {" "}
        All Movies Collection
      </Typography>
      <br />
      <div className="all-items-container">
        {dataMovie.map((val, _) => {
          return (
            <div className="card">
              <div className="card_up">
                <img
                alt="some stuff"
                  src={val.image_url}
                  style={{
                    objectFit: "cover",
                    width: "300px",
                    height: "400px",
                    borderRadius: "10px 10px 0 0",
                  }}
                />
              </div>
              <div className="card_down">
                <br />
                <h3>
                  {val.title === undefined ? val.title : val.title !== null ? val.title.toUpperCase() : val.title }
                </h3>
                <ul className="card_detail">
                  <li>{val.year}</li>
                  <li>{val.genre}</li>
                </ul>
                <div>
                  <Typography component="legend">Movie Rating</Typography>
                  <Rating
                    readOnly
                    min={0}
                    max={10}
                    name="customized-10"
                    value={val.rating}
                  />
                </div>
                <p>
                  {val.description !== null
                    ? val.description.slice(0, 50)
                    : val.description}
                  . . .
                </p>
                <Button
                  value={val.id}
                  onClick={handleClickMovie}
                  variant="outline-dark"
                >
                  Read More
                </Button>
                <br />
                <br />
              </div>
              <br />
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default AllMovies;
