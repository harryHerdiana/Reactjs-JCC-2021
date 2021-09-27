import axios from "axios";
import React, { createContext, useState } from "react";
import { useHistory } from "react-router";
import Cookies from "js-cookie";
export const DataContext = createContext();

export const DataProvider = (props) => {

  let history = useHistory();
  const handleText = (text, num) => {
    if (text === null) {
      return " ";
    } else {
      return text.slice(text, num) + "...";
    }
  };
  /////////CONTEXT FOR MOVIE////////
  const [dataMovie, setDataMovie] = useState([]);
  const [inputMovie, setInputMovie] = useState({
    description: "",
    duration: 0,
    genre: "",
    image_url: "",
    rating: 0,
    review: "",
    title: "",
    year: 0,
  });
  const [currentMovieId, setCurrentMovieId] = useState(-1);
  const [movieFetchStatus, setMovieFetchStatus] = useState(false);
  const fetchMovieData = async function () {
    let result = await axios.get(
      "https://backendexample.sanbersy.com/api/data-movie"
    );
    let data = result.data;
    setDataMovie(
      data.map((e, _) => {
        return {
          id: e.id,
          description: e.description,
          duration: e.duration,
          genre: e.genre,
          image_url: e.image_url,
          rating: e.rating,
          review: e.review,
          title: e.title,
          year: e.year,
        };
      })
    );
  };
  const fetchMovieByID = async (idMovie) => {
    let res = await axios.get(
      `https://backendexample.sanbersy.com/api/data-movie/${idMovie}`
    );
    let data = res.data;
    setInputMovie({
      id: data.id,
      description: data.description,
      duration: data.duration,
      genre: data.genre,
      image_url: data.image_url,
      rating: data.rating,
      review: data.review,
      title: data.title,
      year: data.year,
    });
    setCurrentMovieId(data.id);
  };
  const functionSubmitMovie = function () {
    axios
      .post(
        `https://backendexample.sanbersy.com/api/data-movie`,
        {
          description: inputMovie.description,
          duration: inputMovie.duration,
          genre: inputMovie.genre,
          image_url: inputMovie.image_url,
          rating: inputMovie.rating,
          review: inputMovie.review,
          title: inputMovie.title,
          year: inputMovie.year,
        },
        {
          headers: { Authorization: `Bearer${Cookies.get("token")}` },
        }
      )
      .then((res) => {
        let data = res.data;
        setDataMovie([
          ...dataMovie,
          {
            id: data.id,
            description: data.description,
            duration: data.duration,
            genre: data.genre,
            image_url: data.image_url,
            rating: data.rating,
            review: data.review,
            title: data.title,
            year: data.year,
          },
        ]);
        history.push("/all_movie");
      });
  };
  const functionUpdateMovie = function (currentMovieId) {
    axios
      .put(
        `https://backendexample.sanbersy.com/api/data-movie/${currentMovieId}`,
        {
          description: inputMovie.description,
          duration: inputMovie.duration,
          genre: inputMovie.genre,
          image_url: inputMovie.image_url,
          rating: inputMovie.rating,
          review: inputMovie.review,
          title: inputMovie.title,
          year: inputMovie.year,
        },
        {
          headers: { Authorization: `Bearer${Cookies.get("token")}` },
        }
      )
      .then(() => {
        let newDataMovie = dataMovie.find((e) => e.id === currentMovieId);
        newDataMovie.description = inputMovie.description;
        newDataMovie.duration = inputMovie.duration;
        newDataMovie.genre = inputMovie.genre;
        newDataMovie.image_url = inputMovie.image_url;
        newDataMovie.rating = inputMovie.rating;
        newDataMovie.review = inputMovie.review;
        newDataMovie.title = inputMovie.title;
        newDataMovie.year = inputMovie.year;
        setDataMovie([...dataMovie]);
      });
      history.push("/setting_movie");
  };
  const functionDeleteMovie = function (idMovie) {
    axios
      .delete(`https://backendexample.sanbersy.com/api/data-movie/${idMovie}`, {
        headers: { Authorization: `Bearer${Cookies.get("token")}` },
      })
      .then(() => {
        let newDataMovie = dataMovie.filter((res) => {
          return res.id !== idMovie;
        });
        setMovieFetchStatus(false)
        setDataMovie(newDataMovie);
      });
      history.push("/setting_movie");
  };
  const functionEditMovie = function (idMovie) {
    axios
      .get(`https://backendexample.sanbersy.com/api/data-movie/${idMovie}`)
      .then((res) => {
        let data = res.data;
        setInputMovie({
          id: data.id,
          description: data.description,
          duration: data.duration,
          genre: data.genre,
          image_url: data.image_url,
          rating: data.rating,
          review: data.review,
          title: data.title,
          year: data.year,
        });
      });
  };
  ///////CONTEXT FOR GAMES/////////
  const [dataGames, setDataGames] = useState([]);
  const [inputGames, setInputGames] = useState({
    genre: "",
    image_url: "",
    singlePlayer: true,
    multiplayer: false,
    name: "",
    platform: "",
    release: 0,
  });
  const [currentGamesId, setCurrentGamesId] = useState(-1);
  const [gamesFetchStatus, setGamesFetchStatus] = useState(false);
  const fetchGamesData = async function () {
    let result = await axios.get(
      "https://backendexample.sanbersy.com/api/data-game"
    );
    let data = result.data;
    setDataGames(
      data.map((e, _) => {
        return {
          id: e.id,
          genre: e.genre,
          image_url: handleText(e.image_url, 40),
          singlePlayer: e.singlePlayer,
          multiplayer: e.multiplayer,
          name: e.name,
          platform: e.platform,
          release: e.release,
        };
      })
    );
  };
  const fetchGamesByID = async function (idGames) {
    let res = await axios.get(
      `https://backendexample.sanbersy.com/api/data-game/${idGames}`
    );
    let data = res.data;
    setInputGames({
      id: data.id,
      genre: data.genre,
      image_url: data.image_url,
      singlePlayer: data.singlePlayer,
      multiplayer: data.multiplayer,
      name: data.name,
      platform: data.platform,
      release: data.release,
    });
    setCurrentGamesId(data.id);
  };
  const functionSubmitGames = function () {
    axios
      .post(
        `https://backendexample.sanbersy.com/api/data-game`,
        {
          genre: inputGames.genre,
          image_url: inputGames.image_url,
          singlePlayer: inputGames.singlePlayer,
          multiplayer: inputGames.multiplayer,
          name: inputGames.name,
          platform: inputGames.platform,
          release: inputGames.release,
        },
        {
          headers: { Authorization: `Bearer${Cookies.get("token")}` },
        }
      )
      .then((res) => {
        let data = res.data;
        setDataGames([
          ...dataGames,
          {
            id: data.id,
            genre: data.genre,
            image_url: data.image_url,
            singlePlayer: data.singlePlayer,
            multiplayer: data.multiplayer,
            name: data.name,
            platform: data.platform,
            release: data.release,
          },
        ]);
        history.push("/all_games");
      });
  };

  const functionUpdateGames = function (currentGamesId) {
    axios
      .put(
        `https://backendexample.sanbersy.com/api/data-game/${currentGamesId}`,
        {
          genre: inputGames.genre,
          image_url: inputGames.image_url,
          singlePlayer: inputGames.singlePlayer,
          multiplayer: inputGames.multiplayer,
          name: inputGames.name,
          platform: inputGames.platform,
          release: inputGames.release,
        },
        {
          headers: { Authorization: `Bearer${Cookies.get("token")}` },
        }
      )
      .then(() => {
        let newDataGames = dataGames.find((e) => e.id === currentGamesId);
        newDataGames.genre = inputGames.genre;
        newDataGames.image_url = inputGames.image_url;
        newDataGames.singlePlayer = inputGames.singlePlayer;
        newDataGames.multiplayer = inputGames.multiplayer;
        newDataGames.name = inputGames.name;
        newDataGames.platform = inputGames.platform;
        newDataGames.release = inputGames.release;
        setDataGames([...dataGames]);
      });
      history.push("/setting_games");
  };
  const functionDeleteGames = function (idGames) {
    axios
      .delete(`https://backendexample.sanbersy.com/api/data-game/${idGames}`, {
        headers: { Authorization: `Bearer${Cookies.get("token")}` },
      })
      .then(() => {
        let newDataGames = dataGames.filter((res) => {
          return res.id !== idGames;
        });
        setDataGames(newDataGames);
        history.push("/all_games");
      });
  };
  const functionEditGames = function (idGames) {
    axios
      .get(`https://backendexample.sanbersy.com/api/data-game/${idGames}`)
      .then((res) => {
        let data = res.data;
        setInputMovie({
          id: data.id,
          genre: data.genre,
          image_url: data.image_url,
          singlePlayer: data.singlePlayer,
          multiplayer: data.multiplayer,
          name: data.name,
          platform: data.platform,
          release: data.release,
        });
      });
  };

  const getPlayer = (num) => {
    return num === 1 ? "Yes" : "No";
  };
  const functions = {
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
    getPlayer,
  };

  return (
    <DataContext.Provider
      value={{
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
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};
