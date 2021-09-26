import React, { useEffect, useContext } from "react";
import { useHistory } from "react-router";
import { DataContext } from "../Context/DataContext";
import Typography from "@mui/material/Typography";
import Button from '@mui/material/Button';
import Cookies from "js-cookie";


function AllMovies(){
    let history = useHistory();
  const {
    dataMovie,
    setDataMovie,
    inputMovie,
    setInputMovie,
    currentMovieId,
    setCurrentMovieId,
    gamesFetchStatus,
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
    if (movieFetchStatus ===true) {
      fetchMovieData();
      setMovieFetchStatus(false);
    }
  }, [
    movieFetchStatus,
    setMovieFetchStatus,
  ]);
  const handleClickMovie = (event) =>{
    //   console.log("button clicked");
    let idItem = parseInt(event.currentTarget.value)
    console.log(idItem);
    history.push(`/detail_movie/${idItem}`)
  }

    return(
        <div class={Cookies.get("token")!==undefined ? "login-shifted" : "content"}>
      <Typography className="home-title" variant="h3"> All Movies Collection</Typography>
      <br />
      <div className="all-items-container">
        {dataMovie.map((val, _) => {
          return (
            <div className="card">
              <div className="card_up">
                <img
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
                <h3>{val.title.toUpperCase()}</h3>
                <ul className="card_detail">
                  <li>{val.year}</li>
                  <li>{val.genre}</li>
                </ul>
                <p>{val.description.slice(0, 50)}. . .</p>
                <Button value={val.id} onClick={handleClickMovie} variant="outline-dark">Read More</Button>
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