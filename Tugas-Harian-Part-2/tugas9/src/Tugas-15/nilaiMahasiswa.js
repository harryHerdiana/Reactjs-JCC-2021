import React from "react"
import { NilaiMahasiswaProvider } from "../Context/nilaiMahasiswaContext"
import NilaiMahasiswaForm from "./nilaiMahasiswaForm"
import NilaiMahasiswaList from "./nilaiMahasiswaList"

const Tugas15 = () => {
    return(
        <NilaiMahasiswaProvider>
            <NilaiMahasiswaList/>
        </NilaiMahasiswaProvider>
    )
}

export default Tugas15