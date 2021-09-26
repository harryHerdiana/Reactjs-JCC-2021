import React, { useEffect, useContext } from "react";
import { useHistory } from "react-router";
import { DataContext } from "../Context/DataContext";
import Typography from "@mui/material/Typography";
import Button from '@mui/material/Button';
import Cookies from "js-cookie";


function AllGames(){
    let history = useHistory();
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
    fetchGamesData,
    functionSubmitGames,
    functionUpdateGames,
    functionDeleteGames,
    functionEditGames,
    fetchGamesByID,
  } = functions;

  useEffect(() => {
    if (gamesFetchStatus) {
      fetchGamesData();
      setGamesFetchStatus(false);
    }
  }, [
    gamesFetchStatus,
    setGamesFetchStatus,
  ]);
  const handleClickGames = (event) =>{
    //   console.log("button clicked");
    let idItem = parseInt(event.currentTarget.value)
    history.push(`/detail_games/${idItem}`)
  }

    return(
        <div class={Cookies.get("token")!==undefined ? "login-shifted" : "content"}>
      <Typography className="home-title" variant="h3"> All Games Collection</Typography>
      <br />
      <div className="all-items-container">
      {dataGames.map((val, _) => {
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
</div>
  );
}
export default AllGames;