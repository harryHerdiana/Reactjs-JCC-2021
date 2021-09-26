import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./HomePage/Home";
import Header from "./Header/Header";
import { DataProvider } from "./Context/DataContext";
import DetailedMovie from "./HomePage/DetailedMovie";
import DetailedGames from "./HomePage/DetailedGames";
import Footer from "./Footer/Footer";
import AllMovies from "./HomePage/AllMovies";
import AllGames from "./HomePage/AllGames";
import { UserContext } from "./Context/UserContext";
import Login from "./Header/Login";
import Cookies from "js-cookie";
import Register from "./Header/Register";
import SideBar from "./HomePage/SideBar";
import ChangePassword from "./Header/ChangePassword";
import GameList from "./SettingPage/GameList";
import GameForm from "./SettingPage/GameForm";
import MovieList from "./SettingPage/MovieList";
import MovieForm from "./SettingPage/MovieForm";



function Routes() {
  const { loginStatus, setLoginStatus } = useContext(UserContext);
  console.log(loginStatus);
  const LoginRoute = ({ ...props }) => {
    if (Cookies.get("token") !== undefined) {
      return <Redirect path="/" />;
    } else {
      return <Route {...props} />;
    }
  };
  return (
    <Router>
        <Header />
        {Cookies.get("token") !== undefined && <SideBar />}
      <DataProvider>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/detail_movie/:Value">
            <DetailedMovie />
          </Route>
          <Route exact path="/detail_games/:Value">
            <DetailedGames />
          </Route>
          <Route exact path="/all_movie">
            <AllMovies />
          </Route>
          <Route exact path="/all_games">
            <AllGames />
          </Route>
          <Route exact path="/setting_games">
            <GameList />
          </Route>
          <Route exact path="/setting_movie">
            <MovieList/>
          </Route>
          <Route exact path="/setting_game/edit/:Value">
          <GameForm/>
          </Route>
          <Route exact path="/setting_game/create">
          <GameForm/>
          </Route>
          <Route exact path="/setting_movie/create">
            <MovieForm/>
          </Route>
          <Route exact path="/setting_movie/edit/:Value">
            <MovieForm/>
          </Route>
          <LoginRoute exact path="/login" component={Login} />
          <LoginRoute exact path="/register" component={Register} />
          <Route exact path="/change_password" component={ChangePassword} />
        </Switch>
      </DataProvider>
      <Footer />
    </Router>
  );
}

export default Routes;
