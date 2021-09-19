import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom"
import Footer from "../footer/Footer"
import Navbar from "../navbar/Navbar";
import Home from "./Home";
import {DataProvider} from "../context/DataContext"
import About from "./About";
import AppList from "./appList";
import AppForm from "./appForm";
function Body(){
    return(

        <Router>
            <DataProvider>
            <Navbar/>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/about" exact component ={About}/>
                <Route path="/mobile-list" exact component={AppList}/>
                <Route path="/mobile-form" exact component={AppForm}/>
                <Route path="/mobile/form/edit/:id"/>
                <Route path="/search/:valueOfSearch"/>
            </Switch>
            </DataProvider>
            <Footer/>
        </Router>
    // <div class="row">
    //     <div class="section">
    //         <div class="card">
    //             <div>
    //                 <h2>bame</h2>
    //                 <h5>Release Year : year</h5>
    //                 <img className="fakeimg" style="width: 50%; height: 300px; object-fit: cover;" src="" />
    //                 <br />
    //                 <br />
    //                 <div>
    //                     <strong>Price: price</strong><br />
    //                     <strong>Rating: rating</strong><br />
    //                     <strong>Size: size</strong><br />
    //                     <strong style="margin-right: 10px">Platform : Android & IOS
    //                     </strong>
    //                     <br />
    //                 </div>
    //                 <p>
    //                     <strong style="margin-right: 10px">Description :</strong>
    //                     {item.description}
    //                 </p>

    //                 <hr />
    //             </div>
    //         </div>

    //     </div>
    // </div>
    )
}

export default Body;