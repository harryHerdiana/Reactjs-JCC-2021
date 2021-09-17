import React from "react"
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom"
import { NilaiMahasiswaProvider } from "../Context/nilaiMahasiswaContext"
import Tugas10 from "../Tugas-10/tugas10"
import Tugas11 from "../Tugas-11/tugas11"
import Tugas12 from "../Tugas-12/tugas12"
import Tugas13 from "../Tugas-13/tugas13"
import Tugas9 from "../Tugas-9/tugas9"
import Nav from "./nav"

import NilaiMahasiswaForm from "./nilaiMahasiswaForm"
import NilaiMahasiswaList from "./nilaiMahasiswaList"
import Tugas15 from "../Tugas-15/nilaiMahasiswa"
import SwitchTheme from "./swtichTheme"
import { ThemeProvider } from "../Context/themeContext.js"

const Routes = () => {
    return (

            <Router>
                <NilaiMahasiswaProvider>
                    <ThemeProvider>
                        <Nav />
                        <Switch>
                            <Route path="/" exact component={Tugas9} />
                            <Route path="/tugas10" exact component={Tugas10} />
                            <Route path="/tugas11" exact component={Tugas11} />
                            <Route path="/tugas12" exact component={Tugas12} />
                            <Route path="/tugas13" exact component={Tugas13} />

                            <Route path="/tugas14" exact  >
                                <NilaiMahasiswaList />
                            </Route>
                            <Route path="/tugas14/create">
                                <NilaiMahasiswaForm/>
                            </Route>
                            <Route path="/tugas14/edit/:Value">
                                <NilaiMahasiswaForm/>
                            </Route>
                            <Route path="/tugas15" exact component={Tugas15} />
  

                        </Switch>
                    </ThemeProvider>
                </NilaiMahasiswaProvider>
            </Router>

    )
}

export default Routes