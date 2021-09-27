import React, { useContext, useEffect } from "react";
import { useParams } from "react-router";
import { DataContext } from "../Context/DataContext";

import Typography from "@mui/material/Typography";

const DetailedGames = function () {
  let { Value } = useParams();
  const {
    inputGames,
    functions,
  } = useContext(DataContext);

  const {
    getPlayer,
    fetchGamesByID,
  } = functions;

  useEffect(() => {
    if (Value !== undefined) {
      fetchGamesByID(Value);
    }
  }, [Value,fetchGamesByID]);
  return (
    <div className="detail-page">
      <div className="detail-left">
        <img alt="detailed stuff" className="detail-image" src={inputGames.image_url} />
      </div>
      <div className="detail-right">
        <br />
        <Typography variant="h4">{inputGames.name.toUpperCase()}</Typography>
        <br />
        <div className="game-detail">
          <Typography variant="h5">Game Detail</Typography>
          <br />
          <Typography variant="body1">
            Initial release date: {inputGames.release}
          </Typography>
          <Typography variant="body1">
            Platform: {inputGames.platform}
          </Typography>
          <Typography variant="body1">Genre: {inputGames.genre}</Typography>
          <Typography variant="body1">
            Single Player?: {getPlayer(inputGames.singlePlayer)}
          </Typography>
          <Typography variant="body1">
            Multi Player?: {getPlayer(inputGames.multiplayer)}
          </Typography>
        </div>
      </div>
    </div>
  );
};
export default DetailedGames;
