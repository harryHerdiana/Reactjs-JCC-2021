import React, { useEffect, useContext } from "react";
import { useHistory } from "react-router";
import { DataContext } from "../Context/DataContext";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Cookies from "js-cookie";

function Home() {
  let history = useHistory();
  const {
    dataGames,
    dataMovie,
    setDataGames,
    setDataMovie,
    inputGames,
    inputMovie,
    setInputGames,
    setInputMovie,
    currentGamesId,
    currentMovieId,
    setCurrentGamesId,
    setCurrentMovieId,
    gamesFetchStatus,
    movieFetchStatus,
    setGamesFetchStatus,
    setMovieFetchStatus,
    functions,
  } = useContext(DataContext);
  const {
    fetchMovieData,
    fetchGamesData,
    functionSubmitGames,
    functionSubmitMovie,
    functionUpdateGames,
    functionUpdateMovie,
    functionDeleteGames,
    functionDeleteMovie,
    functionEditGames,
    functionEditMovie,
    fetchGamesByID,
    fetchMovieByID,
  } = functions;

  useEffect(() => {
    if (gamesFetchStatus === false || movieFetchStatus === false) {
      fetchGamesData();
      setGamesFetchStatus(true);
      fetchMovieData();
      setMovieFetchStatus(true);
    }
  }, [
    fetchMovieData,
    fetchGamesData,
    gamesFetchStatus,
    movieFetchStatus,
    setGamesFetchStatus,
    setMovieFetchStatus,
  ]);

  const handleClickMovie = (event) =>{
    //   console.log("button clicked");
    let idItem = parseInt(event.currentTarget.value)
    console.log(idItem);
    history.push(`/detail_movie/${idItem}`)
  }

  const handleClickGames= (event) =>{
    //   console.log("button clicked");
    let idItem = parseInt(event.currentTarget.value)
    console.log(idItem);
    history.push(`/detail_games/${idItem}`)
  }


  return (
    <div class={Cookies.get("token")!==undefined ? "login-shifted" : "content"}>
      <Typography className="home-title" variant="h3"> Hot Movies</Typography>
      <br />
      <div className="homepage-container">
        {dataMovie.slice(0, 4).map((val, _) => {
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
      <Link style={{color:"inherit"}} to="/all_movie"><Button variant="outline-dark" sx={{position:"absolute",right:"120px"}}>See other movie..</Button></Link>
      <br />
      <br/>
      <hr/>
      <Typography className="home-title" variant="h3"> Hot Games</Typography>
      <br />
      <div className="homepage-container">
        {dataGames.slice(0, 4).map((val, _) => {
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
              <div className="card_down" id="games">
                <br />
                <h3>{val.name.toUpperCase()}</h3>
                <ul className="card_detail">
                  <li>{val.platform}</li>
                  <li>{val.genre}</li>
                </ul>
                
                <Button value={val.id} onClick={handleClickGames} variant="outline-dark">View Detail</Button>
                <br />
                <br />
              </div>
            
              <br />
            </div>
          );
        })}
      </div>
      <Link style={{color:"inherit"}} to="/all_games"><Button variant="outline-dark" sx={{position:"absolute",right:"120px"}}>See other games..</Button></Link>
    </div>
  );
}
export default Home;
