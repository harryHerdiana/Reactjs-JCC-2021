import React, { useContext, useEffect } from "react";
import { useParams, useHistory } from "react-router";
import { DataContext } from "../Context/DataContext";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import axios from "axios";
import { TabPane } from "react-bootstrap";

const DetailedGames = function () {
  let history = useHistory();
  let { Value } = useParams();
  const {
    dataGames,
    setDataGames,
    inputGames,
    setInputGames,
    currentGamesId,
    setCurrentGamesId,
    gamesFetchStatus,
    setGamesFetchStatus,
    functions,
  } = useContext(DataContext);

  const {
    getPlayer,
    fetchGamesData,
    functionSubmitGames,
    functionUpdateGames,
    functionDeleteGames,
    functionEditGames,
    fetchGamesByID,
  } = functions;

  useEffect(() => {
    if (Value !== undefined) {
      fetchGamesByID(Value);
    }
  }, []);
  return(
    <div className="detail-page">
    <div className="detail-left">
      <img className="detail-image" src={inputGames.image_url} />
    </div>
    <div className="detail-right">
      <br />
      <Typography variant="h4">{inputGames.name.toUpperCase()}</Typography>
       <br/>
       <div className="game-detail">
       <Typography variant="h5">Game Detail</Typography>
       <br/>
       <Typography variant="body1">Initial release date: {inputGames.release}</Typography>
       <Typography variant="body1">Platform: {inputGames.platform}</Typography>
       <Typography variant="body1">Genre: {inputGames.genre}</Typography>
       <Typography variant="body1">Single Player?: {getPlayer(inputGames.singlePlayer)}</Typography>
       <Typography variant="body1">Multi Player?: {getPlayer(inputGames.multiplayer)}</Typography>
       </div>
       
        </div>
  </div>
  )
};
export default DetailedGames;