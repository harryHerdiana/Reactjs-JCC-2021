import React from "react";
import { BrowserRouter as Router, Switch, Route,useParams } from "react-router-dom";
import Nav from "./Nav";
import Tugas9 from "../Tugas-9/tugas9";
import Tugas10 from "../Tugas-10/tugas10";
import Tugas11 from "../Tugas-11/tugas11";
import Tugas12 from "../Tugas-12/tugas12";
import Tugas13 from "../Tugas-13/tugas13";
import Tugas14 from "./tugas14";
import { DataProvider } from "./DataProvider";
import DataForm from "./DataForm";
import axios from "axios";


const Routes = () => {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/Tugas-9">
          <Tugas9 />
        </Route>
        <Route exact path="/Tugas-10">
          <Tugas10 />
        </Route>
        <Route exact path="/Tugas-11">
          <Tugas11 />
        </Route>
        <Route exact path="/Tugas-12">
          <Tugas12 />
        </Route>
        <Route exact path="/Tugas-13">
          <Tugas13 />
        </Route>
        <Route exact path="/Tugas-14">
          <Tugas14 />
        </Route>
        <Route exact path="/Data-Form">
            <DataProvider>
                <DataForm/>
            </DataProvider>
        </Route>
        <Route path="/Data-Form/:value">
        <DataProvider>
                <DataForm/>
            </DataProvider>
        </Route>
      </Switch>
    </Router>
  );
};


export default Routes;
